(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector("#image"),u=document.querySelector("#name"),d=document.querySelector("#btn"),l="https://akabab.github.io/superhero-api/api",a=1e3,f=()=>Math.floor(Math.random()*a);d.addEventListener("click",s=>{s.preventDefault();const o=f();fetch(`${l}/id/${o}.json`).then(r=>r.json()).then(r=>{c.src=r.images.sm,u.innerHTML=r.name}).catch(r=>{window.alert(`O id do herói é inválido. Erro: ${r.message}`)})});
