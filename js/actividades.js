/**
 * actividades.js - Lógica de actividades interactivas, validación y feedback
 */

function renderizarActividad(numPantalla, actividad) {
  var container = document.getElementById('actividad-container');
  
  // EXCEPCIÓN ESTRUCTURAL MÓDULO 6 > PANTALLA 16
  if (actividad && actividad.tipo === 'acreditacion') {
    var acredWrapper = document.getElementById('acreditacion-wrapper');
    var colDerecha = document.getElementById('col-derecha');
    if (acredWrapper && colDerecha) {
      acredWrapper.style.display = 'block';
      colDerecha.style.display = 'none';
      container = acredWrapper;
    }
  }

  if (!container || !actividad) {
    container.innerHTML = '<p>No hay actividad para esta pantalla.</p>';
    return;
  }
  
  switch (actividad.tipo) {
    case 'opciones': renderizarOpciones(numPantalla, actividad, container); break;
    case 'sam': renderizarSAM(numPantalla, actividad, container); break;
    case 'simulador': renderizarSimulador(numPantalla, actividad, container); break;
    case 'acreditacion': renderizarAcreditacion(numPantalla, actividad, container); break;
    default: container.innerHTML = '<p>Tipo de actividad no reconocido.</p>';
  }
}

function renderizarOpciones(numPantalla, actividad, container) {
  var estado = obtenerEstado();
  var respuestaGuardada = estado.respuestas[numPantalla];
  var yaCompletada = estado.actividadesCompletadas[numPantalla];
  
  var html = '<p class="actividad-enunciado">' + actividad.enunciado + '</p>';
  if (yaCompletada) html += '<span class="badge-completado"><svg class="icono" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Actividad completada</span>';
  
  html += '<div class="opcion-lista" id="opcion-lista">';
  actividad.opciones.forEach(function(opcion, indice) {
    var claseExtra = (yaCompletada && respuestaGuardada === indice) ? (opcion.correcta ? ' correcta' : ' incorrecta') : '';
    html += '<div class="opcion-item' + claseExtra + '" data-indice="' + indice + '" data-correcta="' + opcion.correcta + '" role="radio" tabindex="0" aria-checked="' + (respuestaGuardada === indice) + '">';
    
    /* ACÁ SOLO VA EL RADIO BUTTON (CÍRCULO LIMPIO), SIN SVGS */
    html += '<span class="opcion-radio"></span>';
    html += '<span class="opcion-texto">' + opcion.texto + '</span>';
    
    html += '</div>';
  });
  html += '</div>';
  
  html += '<button class="btn-validar" id="btn-validar">Comprobar respuesta</button>';
  html += '<button class="btn-reintentar" id="btn-reintentar" style="display: none;">Reintentar</button>';
  container.innerHTML = html;
  
  if (yaCompletada) mostrarFeedbackOpciones(actividad, respuestaGuardada);
  
  var seleccionActual = null;
  var opciones = container.querySelectorAll('.opcion-item');
  var btnValidar = document.getElementById('btn-validar');
  var btnReintentar = document.getElementById('btn-reintentar');
  
  opciones.forEach(function(item) {
    item.addEventListener('click', function() {
      opciones.forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); o.setAttribute('aria-checked', 'false'); });
      item.classList.add('seleccionada'); item.setAttribute('aria-checked', 'true');
      seleccionActual = parseInt(item.dataset.indice);
    });
    item.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
  });
  
  btnValidar.addEventListener('click', function() {
    if (seleccionActual === null) return abrirModal('Atención', '<p>Por favor, seleccioná una opción antes de comprobar.</p>', 'info');
    abrirModal('Confirmar Respuesta', '<p>¿Estás seguro de enviar tu respuesta?</p>', 'info', function() {
      procesarRespuestaOpciones(numPantalla, actividad, seleccionActual, opciones, btnValidar, btnReintentar);
    }, true);
  });
  
  if (btnReintentar) {
    btnReintentar.addEventListener('click', function() {
      opciones.forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); o.setAttribute('aria-checked', 'false'); });
      seleccionActual = null; btnReintentar.style.display = 'none'; btnValidar.style.display = 'inline-flex'; btnValidar.textContent = 'Comprobar respuesta';
    });
  }
}

function procesarRespuestaOpciones(numPantalla, actividad, seleccionActual, opciones, btnValidar, btnReintentar) {
  guardarRespuesta(numPantalla, seleccionActual);
  opciones.forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); });
  
  opciones.forEach(function(o, i) {
    if (i === seleccionActual) o.classList.add(o.dataset.correcta === 'true' ? 'correcta' : 'incorrecta');
  });
  
  var esCorrecta = actividad.opciones[seleccionActual].correcta;
  abrirModal(esCorrecta ? '¡Respuesta correcta!' : 'Respuesta incorrecta', '<p>' + actividad.retroalimentacion + '</p>' + (!esCorrecta ? '<p style="margin-top: 12px; font-weight: 600;">Podés reintentar las veces que necesites.</p>' : ''), esCorrecta ? 'exito' : 'error');
  marcarActividadCompletada(numPantalla);
  
  if (!esCorrecta && btnReintentar) { btnReintentar.style.display = 'inline-flex'; btnValidar.style.display = 'none'; }
  else { btnValidar.textContent = 'Respuesta validada'; }
}

function mostrarFeedbackOpciones(actividad, indiceRespuesta) {
  var esCorrecta = actividad.opciones[indiceRespuesta].correcta;
  abrirModal(esCorrecta ? 'Respuesta correcta' : 'Respuesta incorrecta', '<p>' + actividad.retroalimentacion + '</p>', esCorrecta ? 'exito' : 'error');
}

function renderizarSAM(numPantalla, actividad, container) {
  var estado = obtenerEstado();
  var yaCompletada = estado.actividadesCompletadas[numPantalla];
  var respuestaGuardada = estado.respuestas[numPantalla];
  var html = '<p class="actividad-enunciado">' + actividad.enunciado + '</p>';
  if (yaCompletada) html += '<span class="badge-completado"><svg class="icono" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Autoevaluación registrada</span>';
  
  html += '<div class="sam-widget">';
  actividad.opciones.forEach(function(opcion, indice) {
    var claseExtra = (yaCompletada && respuestaGuardada === indice) ? ' seleccionada' : '';
    html += '<div class="sam-opcion' + claseExtra + '" data-indice="' + indice + '" role="radio" tabindex="0" aria-checked="' + (respuestaGuardada === indice) + '">';
    
    /* ACÁ SÍ VAN LOS ÍCONOS EMOCIONALES */
    html += (typeof ICONOS_SVG !== 'undefined' && ICONOS_SVG[opcion.icono]) ? '<span class="sam-icono-svg">' + ICONOS_SVG[opcion.icono] + '</span>' : '<span class="sam-emoji">' + (opcion.emoji || '') + '</span>';
    
    html += '<span class="sam-texto">' + opcion.texto + '</span></div>';
  });
  html += '</div>';
  container.innerHTML = html;
  
  if (yaCompletada) abrirModal('Autoevaluación Registrada', '<p>' + actividad.opciones[respuestaGuardada].feedback + '</p>', 'exito');
  
  if (!yaCompletada) {
    var opciones = container.querySelectorAll('.sam-opcion');
    opciones.forEach(function(item) {
      item.addEventListener('click', function() {
        opciones.forEach(function(o) { o.classList.remove('seleccionada'); o.setAttribute('aria-checked', 'false'); });
        item.classList.add('seleccionada'); item.setAttribute('aria-checked', 'true');
        var indice = parseInt(item.dataset.indice);
        guardarRespuesta(numPantalla, indice); marcarActividadCompletada(numPantalla);
        abrirModal('Registraste', '<p>' + actividad.opciones[indice].feedback + '</p>', 'exito');
      });
      item.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
    });
  }
}

function renderizarSimulador(numPantalla, actividad, container) {
  var estado = obtenerEstado();
  var yaCompletada = estado.actividadesCompletadas[numPantalla];
  var respuestaGuardada = estado.respuestas[numPantalla];
  
  var html = '<p class="actividad-enunciado">' + actividad.enunciado + '</p>';
  if (yaCompletada) html += '<span class="badge-completado"><svg class="icono" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Actividad completada</span>';
  
  html += (actividad.simuladorTipo === 'carga') ? renderizarSimuladorCarga() : renderizarSimuladorTipografia();
  html += '<p class="actividad-enunciado" style="margin-top: 16px;">' + actividad.pregunta + '</p>';
  
  html += '<div class="opcion-lista" id="opcion-lista">';
  actividad.opciones.forEach(function(opcion, indice) {
    var claseExtra = (yaCompletada && respuestaGuardada === indice) ? (opcion.correcta ? ' correcta' : ' incorrecta') : '';
    html += '<div class="opcion-item' + claseExtra + '" data-indice="' + indice + '" data-correcta="' + opcion.correcta + '" role="radio" tabindex="0" aria-checked="' + (respuestaGuardada === indice) + '">';
    
    /* ACÁ SOLO VA EL RADIO BUTTON (CÍRCULO LIMPIO), SIN SVGS */
    html += '<span class="opcion-radio"></span>';
    html += '<span class="opcion-texto">' + opcion.texto + '</span></div>';
  });
  html += '</div>';
  
  html += '<button class="btn-validar" id="btn-validar">Comprobar respuesta</button>';
  html += '<button class="btn-reintentar" id="btn-reintentar" style="display: none;">Reintentar</button>';
  
  container.innerHTML = html;
  
  if (actividad.simuladorTipo === 'carga') initSimuladorCarga(container);
  else if (actividad.simuladorTipo === 'tipografia') initSimuladorTipografia(container);
  
  if (yaCompletada) mostrarFeedbackOpciones(actividad, respuestaGuardada);
  
  var seleccionActual = null; var opciones = container.querySelectorAll('.opcion-item');
  var btnValidar = document.getElementById('btn-validar'); var btnReintentar = document.getElementById('btn-reintentar');
  
  opciones.forEach(function(item) {
    item.addEventListener('click', function() {
      opciones.forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); o.setAttribute('aria-checked', 'false'); });
      item.classList.add('seleccionada'); item.setAttribute('aria-checked', 'true');
      seleccionActual = parseInt(item.dataset.indice);
    });
    item.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
  });
  
  btnValidar.addEventListener('click', function() {
    if (seleccionActual === null) return abrirModal('Atención', '<p>Por favor, seleccioná una opción antes de comprobar.</p>', 'info');
    abrirModal('Confirmar Respuesta', '<p>¿Estás seguro de enviar tu respuesta?</p>', 'info', function() {
      procesarRespuestaOpciones(numPantalla, actividad, seleccionActual, opciones, btnValidar, btnReintentar);
    }, true);
  });
  
  if (btnReintentar) {
    btnReintentar.addEventListener('click', function() {
      opciones.forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); o.setAttribute('aria-checked', 'false'); });
      seleccionActual = null; btnReintentar.style.display = 'none'; btnValidar.style.display = 'inline-flex'; btnValidar.textContent = 'Comprobar respuesta';
    });
  }
}

function renderizarSimuladorCarga() {
  return '<div class="simulador-carga"><div class="simulador-visor"><div class="simulador-barras"><div class="simulador-barra"><span class="simulador-barra-label">Carga Extraña</span><div class="simulador-barra-track"><div class="simulador-barra-fill extraña" id="barra-extraña" style="width: 85%"></div></div><span class="simulador-barra-pct" id="pct-extraña">85%</span></div><div class="simulador-barra"><span class="simulador-barra-label">Carga Germana</span><div class="simulador-barra-track"><div class="simulador-barra-fill germana" id="barra-germana" style="width: 15%"></div></div><span class="simulador-barra-pct" id="pct-germana">15%</span></div></div></div><button class="btn-depurar" id="btn-depurar">Depurar interfaz (eliminar ruido visual)</button></div>';
}

function initSimuladorCarga(container) {
  var btnDepurar = container.querySelector('#btn-depurar');
  if (!btnDepurar) return;
  var depurado = false;
  btnDepurar.addEventListener('click', function() {
    depurado = !depurado;
    var barraExtraña = container.querySelector('#barra-extraña'); var barraGermana = container.querySelector('#barra-germana');
    var pctExtraña = container.querySelector('#pct-extraña'); var pctGermana = container.querySelector('#pct-germana');
    if (depurado) { barraExtraña.style.width = '20%'; barraGermana.style.width = '80%'; pctExtraña.textContent = '20%'; pctGermana.textContent = '80%'; btnDepurar.textContent = 'Restaurar ruido visual'; }
    else { barraExtraña.style.width = '85%'; barraGermana.style.width = '15%'; pctExtraña.textContent = '85%'; pctGermana.textContent = '15%'; btnDepurar.textContent = 'Depurar interfaz (eliminar ruido visual)'; }
  });
}

function renderizarSimuladorTipografia() {
  return '<div class="simulador-tipo"><div class="simulador-tipo-alerta" id="tipo-alerta">Los espacios desiguales entre palabras (ríos blancos) rompen el rastreo ocular y dificultan el salto de línea, afectando la legibilidad.</div><div class="simulador-tipo-caja justificado" id="tipo-caja">La accesibilidad cognitiva es un derecho. El diseño universal de origen garantiza que todas las personas puedan acceder al contenido digital sin barreras artificiales. La microtipografía web cuida la legibilidad mediante reglas precisas de alineación, interlineado y jerarquía visual.</div><div style="display: flex; gap: 8px;"><button class="btn-toggle-tipo activo" id="btn-justificar">Justificar</button><button class="btn-toggle-tipo" id="btn-izquierda">Alinear a la izquierda</button></div></div>';
}

function initSimuladorTipografia(container) {
  var btnJustificar = container.querySelector('#btn-justificar'); var btnIzquierda = container.querySelector('#btn-izquierda');
  var caja = container.querySelector('#tipo-caja'); var alerta = container.querySelector('#tipo-alerta');
  if (!btnJustificar || !btnIzquierda) return;
  btnJustificar.addEventListener('click', function() { caja.classList.remove('izquierda'); caja.classList.add('justificado'); alerta.classList.add('activo'); btnJustificar.classList.add('activo'); btnIzquierda.classList.remove('activo'); });
  btnIzquierda.addEventListener('click', function() { caja.classList.remove('justificado'); caja.classList.add('izquierda'); alerta.classList.remove('activo'); btnIzquierda.classList.add('activo'); btnJustificar.classList.remove('activo'); });
}

function renderizarAcreditacion(numPantalla, actividad, container) {
  var estado = obtenerEstado();
  var yaCompletada = estado.actividadesCompletadas[numPantalla];
  var respuestasGuardadas = estado.respuestas[numPantalla] || {};
  
  var html = '<p class="actividad-enunciado">' + actividad.enunciado + '</p>';
  if (yaCompletada) html += '<span class="badge-completado"><svg class="icono" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Acreditación completada</span>';
  
  html += '<div class="acreditacion-casos">';
  actividad.casos.forEach(function(caso, indiceCaso) {
    html += '<div class="acreditacion-caso" data-caso="' + indiceCaso + '"><h4>' + caso.titulo + '</h4><p class="caso-enunciado">' + caso.enunciado + '</p><div class="opcion-lista">';
    caso.opciones.forEach(function(opcion, indiceOpcion) {
      var claseExtra = (yaCompletada && respuestasGuardadas[indiceCaso] === indiceOpcion) ? (opcion.correcta ? ' correcta' : ' incorrecta') : '';
      html += '<div class="opcion-item' + claseExtra + '" data-caso="' + indiceCaso + '" data-opcion="' + indiceOpcion + '" data-correcta="' + opcion.correcta + '" role="radio" tabindex="0" aria-checked="' + (respuestasGuardadas[indiceCaso] === indiceOpcion) + '">';
      
      /* ACÁ SOLO VA EL RADIO BUTTON (CÍRCULO LIMPIO), SIN SVGS */
      html += '<span class="opcion-radio"></span>';
      html += '<span class="opcion-texto">' + opcion.texto + '</span></div>';
    });
    html += '</div></div>';
  });
  html += '</div>';
  
  html += '<button class="btn-validar" id="btn-validar">Validar acreditación</button>';
  html += '<button class="btn-reintentar" id="btn-reintentar" style="display: none;">Reintentar acreditación</button>';
  html += '<div class="acreditacion-resultado" id="acreditacion-resultado"></div>';
  container.innerHTML = html;
  
  if (yaCompletada) mostrarResultadoAcreditacion(actividad, respuestasGuardadas);
  
  if (!yaCompletada) {
    var selecciones = {}; var opciones = container.querySelectorAll('.opcion-item');
    var btnValidar = document.getElementById('btn-validar'); var btnReintentar = document.getElementById('btn-reintentar');
    
    opciones.forEach(function(item) {
      item.addEventListener('click', function() {
        var numCaso = parseInt(item.dataset.caso); var numOpcion = parseInt(item.dataset.opcion);
        container.querySelectorAll('.opcion-item[data-caso="' + numCaso + '"]').forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); o.setAttribute('aria-checked', 'false'); });
        item.classList.add('seleccionada'); item.setAttribute('aria-checked', 'true'); selecciones[numCaso] = numOpcion;
        if (Object.keys(selecciones).length === actividad.casos.length) btnValidar.disabled = false;
      });
      item.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
    });
    
    btnValidar.addEventListener('click', function() {
      if (Object.keys(selecciones).length < actividad.casos.length) return abrirModal('Atención', '<p>Por favor, respondé todos los casos antes de validar.</p>', 'info');
      abrirModal('Confirmar Acreditación', '<p>¿Estás seguro de enviar tus respuestas de acreditación?</p>', 'info', function() {
        guardarRespuesta(numPantalla, selecciones);
        opciones.forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); });
        opciones.forEach(function(o) {
          var numCaso = parseInt(o.dataset.caso); var numOpcion = parseInt(o.dataset.opcion);
          if (selecciones[numCaso] === numOpcion) o.classList.add(o.dataset.correcta === 'true' ? 'correcta' : 'incorrecta');
        });
        mostrarResultadoAcreditacion(actividad, selecciones); marcarActividadCompletada(numPantalla);
        abrirModal('Acreditación Completada', '<p>' + actividad.retroalimentacion + '</p>', 'exito');
        var aciertos = 0; actividad.casos.forEach(function(caso, indiceCaso) { if (caso.opciones[selecciones[indiceCaso]].correcta) aciertos++; });
        if (aciertos < actividad.casos.length && btnReintentar) { btnReintentar.style.display = 'inline-flex'; btnValidar.style.display = 'none'; }
        else { btnValidar.textContent = 'Acreditación validada'; }
      }, true);
    });
    
    if (btnReintentar) {
      btnReintentar.addEventListener('click', function() {
        opciones.forEach(function(o) { o.classList.remove('seleccionada', 'correcta', 'incorrecta'); o.setAttribute('aria-checked', 'false'); });
        for (var key in selecciones) delete selecciones[key];
        btnReintentar.style.display = 'none'; btnValidar.style.display = 'inline-flex'; btnValidar.textContent = 'Validar acreditación'; btnValidar.disabled = true;
        var resultado = document.getElementById('acreditacion-resultado'); if (resultado) resultado.classList.remove('activo');
      });
    }
  }
}

function mostrarResultadoAcreditacion(actividad, respuestas) {
  var panel = document.getElementById('acreditacion-resultado'); if (!panel) return;
  var aciertos = 0;
  actividad.casos.forEach(function(caso, indiceCaso) { var opc = respuestas[indiceCaso]; if (opc !== undefined && caso.opciones[opc].correcta) aciertos++; });
  panel.classList.add('activo');
  panel.innerHTML = '<h3>' + aciertos + ' de ' + actividad.casos.length + ' casos correctos</h3><p>' + (aciertos >= 4 ? 'Felicitaciones. Has acreditado el taller de Diseño Tecnopedagógico de MED Accesibles.' : 'Te invitamos a revisar los contenidos y reintentar la acreditación.') + '</p>';
}