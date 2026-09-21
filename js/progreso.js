/**
 * progreso.js - Lógica de navegación, progreso y persistencia (localStorage)
 */

const STORAGE_KEY = 'med_estado';
const TOTAL_PANTALLAS = Object.keys(PANTALLAS).length;

function obtenerEstado() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) return JSON.parse(guardado);
  return { pantallasVisitadas: [], actividadesCompletadas: {}, ultimaPantalla: 0, respuestas: {} };
}

function guardarEstado(estado) { localStorage.setItem(STORAGE_KEY, JSON.stringify(estado)); }

function marcarPantallaVisitada(numPantalla) {
  const estado = obtenerEstado();
  if (!estado.pantallasVisitadas.includes(numPantalla)) estado.pantallasVisitadas.push(numPantalla);
  estado.ultimaPantalla = numPantalla;
  guardarEstado(estado);
}

function marcarActividadCompletada(numPantalla) {
  const estado = obtenerEstado(); estado.actividadesCompletadas[numPantalla] = true; guardarEstado(estado);
}

function guardarRespuesta(numPantalla, indiceRespuesta) {
  const estado = obtenerEstado(); estado.respuestas[numPantalla] = indiceRespuesta; guardarEstado(estado);
}

function calcularProgresoGlobal() {
  const estado = obtenerEstado(); return Math.min(Math.round((estado.pantallasVisitadas.length / TOTAL_PANTALLAS) * 100), 100);
}

function initHub() {
  const estado = obtenerEstado();
  const progreso = calcularProgresoGlobal();
  const fill = document.getElementById('progreso-global-fill'); const pct = document.getElementById('progreso-global-pct'); const heroProgreso = document.getElementById('hero-progreso');
  if (fill) fill.style.width = progreso + '%'; if (pct) pct.textContent = progreso + '%'; if (heroProgreso) heroProgreso.textContent = progreso + '%';
  
  const hubReanudar = document.getElementById('hub-reanudar'); 
  const btnReanudar = document.getElementById('btn-reanudar'); 
  const btnReiniciarHub = document.getElementById('btn-reiniciar-hub');
  
  if (hubReanudar && estado.pantallasVisitadas.length > 0) {
    hubReanudar.style.display = 'flex';
    
    // CORRECCIÓN: El modal de reanudación AHORA SOLO aparece al hacer clic en Reanudar
    if (btnReanudar) {
      btnReanudar.addEventListener('click', function() { 
        mostrarModalReanudacion(estado.ultimaPantalla); 
      });
    }
    if (btnReiniciarHub) btnReiniciarHub.addEventListener('click', confirmarReinicio);
  }
  
  const grid = document.getElementById('hub-grid'); if (!grid) return;
  MODULOS.forEach(function(mod) {
    const completadas = mod.pantallas.filter(function(p) { return estado.actividadesCompletadas[p]; }).length;
    const primeraNoVisitada = mod.pantallas.find(function(p) { return !estado.pantallasVisitadas.includes(p); });
    const destino = (primeraNoVisitada !== undefined) ? primeraNoVisitada : mod.pantallas[0];
    const moduloCompleto = completadas === mod.pantallas.length;
    
    const tarjeta = document.createElement('a'); tarjeta.className = 'tarjeta-modulo color-' + mod.numero; tarjeta.href = 'pantalla.html?p=' + destino;
    const iconos = [ '<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>', '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>', '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>', '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>', '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>', '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>' ];
    tarjeta.innerHTML = '<div class="tarjeta-icono"><svg viewBox="0 0 24 24">' + iconos[mod.numero - 1] + '</svg></div><h2>Módulo ' + mod.numero + ': ' + mod.titulo + '</h2><p>' + mod.descripcion + '</p><div class="tarjeta-estado' + (moduloCompleto ? ' tarjeta-estado-completado' : '') + '"><svg class="icono" viewBox="0 0 24 24">' + (moduloCompleto ? '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>' : '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>') + '</svg>' + completadas + ' de ' + mod.pantallas.length + ' pantallas</div>';
    grid.appendChild(tarjeta);
  });
}

function mostrarModalReanudacion(ultimaPantalla) {
  // CORRECCIÓN: El contador en el modal de reanudación también parte de base cero.
  const maxPantallas = TOTAL_PANTALLAS - 1;
  abrirModal('Reanudar Progreso', '<p>Detectamos que ya iniciaste este taller. Tu última pantalla vista fue la <strong>Pantalla ' + ultimaPantalla + ' de ' + maxPantallas + '</strong>.</p><p>¿Deseás reanudar desde donde lo dejaste?</p>', 'info', function() { window.location.href = 'pantalla.html?p=' + ultimaPantalla; }, true);
}

function obtenerNumPantallaDeURL() {
  const params = new URLSearchParams(window.location.search); const p = params.get('p');
  if (p !== null && !isNaN(parseInt(p))) { const num = parseInt(p); if (num >= 0 && num < TOTAL_PANTALLAS) return num; }
  return 0;
}

function initPantalla() {
  const numPantalla = obtenerNumPantallaDeURL(); const datos = PANTALLAS[numPantalla];
  if (!datos) return window.location.href = 'index.html';
  
  marcarPantallaVisitada(numPantalla); document.title = datos.titulo + ' - Taller MED';
  document.getElementById('breadcrumbs').textContent = datos.breadcrumbs; document.getElementById('modulo-tag').textContent = datos.moduloTitulo; document.getElementById('titulo-pantalla').textContent = datos.titulo; document.getElementById('progreso-pantalla-pct').textContent = datos.progreso + '%'; document.getElementById('progreso-pantalla-fill').style.width = datos.progreso + '%';
  
  // CORRECCIÓN: Contador arranca en 0 (numPantalla directamente) sobre el total restándole la portada.
  const contador = document.getElementById('contador-pantalla'); 
  if (contador) contador.textContent = 'Pantalla ' + numPantalla + ' de ' + (TOTAL_PANTALLAS - 1);
  
  document.getElementById('texto-izquierda').innerHTML = datos.textoIzquierda; document.getElementById('nodo-guia-texto').textContent = datos.nodoGuia;
  
  const feedforwardTexto = document.getElementById('feedforward-texto'); if (feedforwardTexto && datos.instruccion) feedforwardTexto.textContent = datos.instruccion;
  
  const ctaGroup = document.getElementById('cta-group'); ctaGroup.innerHTML = '';
  datos.materialAmpliatorio.forEach(function(mat) {
    const btn = document.createElement('button'); btn.className = 'btn-cta';
    btn.innerHTML = ((typeof ICONOS_SVG !== 'undefined' && ICONOS_SVG[mat.icono]) ? ICONOS_SVG[mat.icono] : '<span>' + mat.icono + '</span>') + ' ' + mat.texto;
    btn.addEventListener('click', function() { abrirModalRecurso(mat); }); ctaGroup.appendChild(btn);
  });
  
  if (typeof renderizarActividad === 'function') renderizarActividad(numPantalla, datos.actividad);
  
  configurarNavegacion(numPantalla);
  document.getElementById('btn-salir').addEventListener('click', function() { window.location.href = 'index.html'; });
  
  configurarGlosario(); configurarCierreModal();
}

function configurarNavegacion(numPantalla) {
  const btnAnterior = document.getElementById('btn-anterior'); const btnSiguiente = document.getElementById('btn-siguiente');
  
  if (numPantalla === 0) btnAnterior.disabled = true;
  else { btnAnterior.disabled = false; btnAnterior.addEventListener('click', function() { window.location.href = 'pantalla.html?p=' + (numPantalla - 1); }); }
  
  btnSiguiente.disabled = false; btnSiguiente.title = '';
  if (numPantalla === TOTAL_PANTALLAS - 1) {
    btnSiguiente.innerHTML = 'Finalizar <svg class="icono" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
    btnSiguiente.addEventListener('click', function() { window.location.href = 'index.html'; });
  } else {
    btnSiguiente.addEventListener('click', function() { window.location.href = 'pantalla.html?p=' + (numPantalla + 1); });
  }
}

function abrirModal(titulo, contenidoHTML, tipo, callbackConfirmar, mostrarCancelar) {
  var overlay = document.getElementById('modal-overlay'); var contenido = overlay.querySelector('.modal-contenido');
  var tituloEl = document.getElementById('modal-titulo'); var cuerpo = document.getElementById('modal-cuerpo'); var botones = document.getElementById('modal-botones');
  
  contenido.classList.remove('modal-exito', 'modal-error', 'modal-info'); if (tipo) contenido.classList.add('modal-' + tipo);
  tituloEl.textContent = titulo; cuerpo.innerHTML = contenidoHTML; botones.innerHTML = '';
  
  if (callbackConfirmar) {
    var btnConfirmar = document.createElement('button'); btnConfirmar.className = 'btn-modal-confirmar'; btnConfirmar.textContent = 'Confirmar';
    btnConfirmar.addEventListener('click', function() { cerrarModal(); callbackConfirmar(); }); botones.appendChild(btnConfirmar);
  }
  
  if (mostrarCancelar) {
    var btnCancelar = document.createElement('button'); btnCancelar.className = 'btn-modal-cancelar'; btnCancelar.textContent = 'Cancelar';
    btnCancelar.addEventListener('click', cerrarModal); botones.appendChild(btnCancelar);
  }
  overlay.classList.add('activo');
}

function cerrarModal() { document.getElementById('modal-overlay').classList.remove('activo'); }

function configurarCierreModal() {
  var btnCerrarX = document.getElementById('modal-cerrar-x'); if (btnCerrarX) btnCerrarX.addEventListener('click', cerrarModal);
  var btnCerrar = document.getElementById('modal-cerrar'); if (btnCerrar) btnCerrar.addEventListener('click', cerrarModal);
  var overlay = document.getElementById('modal-overlay'); if (overlay) overlay.addEventListener('click', function(e) { if (e.target === overlay) cerrarModal(); });
}

function configurarGlosario() {
  var btnGlosario = document.getElementById('btn-glosario'); if (!btnGlosario) return;
  btnGlosario.addEventListener('click', function() {
    var html = '<dl class="glosario-lista">'; GLOSARIO.forEach(function(item) { html += '<div class="glosario-item"><dt>' + item.termino + '</dt><dd>' + item.definicion + '</dd></div>'; }); html += '</dl>';
    abrirModal('Glosario de Términos', html, 'info');
  });
}

function abrirModalRecurso(recurso) {
  var tipos = { 'consulta': 'Material de consulta opcional', 'obligatorio': 'Material obligatorio', 'lectura': 'Lectura de profundización', 'profundizacion': 'Material de profundización académica', 'caso': 'Estudio de caso', 'apoyo': 'Material de apoyo metodológico', 'metodologico': 'Documento metodológico', 'programa': 'Documento del programa', 'diseno': 'Recurso de diseño', 'tecnico': 'Recurso técnico', 'marco': 'Documento de marco teórico', 'repositorio': 'Repositorio completo', 'descarga': 'Recurso descargable', 'insumo': 'Insumo de diseño' };
  var descripcion = tipos[recurso.tipo] || 'Recurso educativo';
  var iconoHTML = (typeof ICONOS_SVG !== 'undefined' && ICONOS_SVG[recurso.icono]) ? ICONOS_SVG[recurso.icono] : '<span>' + recurso.icono + '</span>';
  var html = '<div style="text-align: center; padding: 24px 0;"><div style="margin-bottom: 16px; display: flex; justify-content: center;">' + iconoHTML + '</div><p style="font-size: 16px; font-weight: 700; color: #1F2937; margin-bottom: 8px;">' + recurso.texto + '</p><p style="font-size: 14px; color: #6B7280; margin-bottom: 16px;">' + descripcion + '</p><p style="font-size: 14px; color: #6B7280; line-height: 1.5;">Este recurso forma parte del material ampliatorio del taller. En el repositorio del proyecto encontrarás el archivo completo para consulta o descarga.</p></div>';
  abrirModal('Material Ampliatorio', html, 'info');
}

function confirmarReinicio() {
  abrirModal('Confirmar Reinicio', '<p>¿Estás seguro de reiniciar el taller?</p><p style="margin-top: 8px; font-weight: 700; color: #991B1B;">Esto borrará todo tu progreso y te llevará de vuelta a la Portada de inicio.</p>', 'error', reiniciarProgreso, true);
}

function reiniciarProgreso() { localStorage.removeItem(STORAGE_KEY); window.location.href = 'index.html'; }

document.addEventListener('DOMContentLoaded', function() {
  configurarCierreModal();
  if (document.getElementById('hub-grid')) initHub();
  if (document.getElementById('med-canvas')) initPantalla();
});