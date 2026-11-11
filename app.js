"use strict";
// The personal code remains in the URL fragment. No fetch, storage or analytics.
(() => {
 const values = new URLSearchParams(location.hash.slice(1));
 const codes = values.getAll("acceso_test");
 if (codes.length !== 1 || !/^[a-f0-9]{48}$/.test(codes[0])) return;
 const query = "continuar=arena&acceso_test=" + encodeURIComponent(codes[0]);
 const entry = document.getElementById("entry");
 const direct = document.getElementById("direct");
 entry.href = "intent://ingresar?" + query + "#Intent;scheme=agarapp-dueltest;package=ar.agara.agarapp.dueltest;end";
 direct.href = "agarapp-dueltest://ingresar?" + query;
 entry.hidden = direct.hidden = false;
 document.getElementById("access-note").textContent = "Tu enlace personal está listo para abrir la aplicación. No necesitás escribir tu correo.";
})();
