/* Aula Abierta — formas 3D de fondo e inclinación de tarjetas */
(function () {
  'use strict';
  var calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bg = document.createElement('div'); bg.className = 'bg3d'; bg.setAttribute('aria-hidden', 'true');
  [['70px','8%','12%','#a78bfa','#6d28d9','10s'], ['46px','82%','30%','#67e8f9','#0891b2','8s'],
   ['90px','72%','74%','#f9a8d4','#db2777','12s'], ['38px','14%','68%','#fde68a','#d97706','9s']]
  .forEach(function (o) {
    var d = document.createElement('div'); d.className = 'orb';
    d.style.cssText = 'width:'+o[0]+';height:'+o[0]+';left:'+o[1]+';top:'+o[2]+';--c1:'+o[3]+';--c2:'+o[4]+';--t:'+o[5];
    bg.appendChild(d);
  });
  var cube = document.createElement('div'); cube.className = 'cube'; cube.style.cssText = 'left:88%;top:52%';
  for (var i = 0; i < 6; i++) cube.appendChild(document.createElement('i'));
  bg.appendChild(cube);
  document.body.appendChild(bg);

  if (calm || !matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.bg-surface-container-lowest.rounded-xl, article.rounded-xl, .bg-primary-container.rounded-xl')
  .forEach(function (el) {
    el.setAttribute('data-tilt', '');
    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.classList.add('is-tilting');
      el.style.transform = 'perspective(800px) rotateX(' + (-y * 7) + 'deg) rotateY(' + (x * 9) + 'deg) translateZ(6px)';
    });
    el.addEventListener('pointerleave', function () { el.classList.remove('is-tilting'); el.style.transform = ''; });
  });
})();
