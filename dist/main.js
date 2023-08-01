(()=>{"use strict";function e(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Menu";const n=document.createElement("h2");n.textContent="Brilliant Combos Bursting with Flavor",e.appendChild(t),e.appendChild(n);const c=document.createElement("div");c.className="menu-items",e.appendChild(c);let o=["Soups","Salads","Entrees","Top Rated Dishes"];for(let e=0;e<o.length;e++){let t=document.createElement("div"),n=document.createElement("h3");t.className="dish-type-container",n.className=o[e].replace(/ /g,""),n.textContent=o[e],c.appendChild(t),t.appendChild(n)}const a=document.querySelectorAll(".dish-type-container"),l=["French Onion","Daily Special"];for(let e=0;e<l.length;e++){let t=document.createElement("p");t.textContent=l[e],a[0].appendChild(t)}const s=["House Salad","Beeza Salad","Poached Pear Salad"];for(let e=0;e<s.length;e++){let t=document.createElement("p");t.textContent=s[e],a[1].appendChild(t)}const d=["Rosemary Roasted Chicken","Mushroom Pappardelle","Pesto Pasta"];for(let e=0;e<d.length;e++){let t=document.createElement("p");t.textContent=d[e],a[2].appendChild(t)}const i=["Morrocan Chicken Salad Sandwich","Ham & Brie","Burger Provenance"];for(let e=0;e<i.length;e++){let t=document.createElement("p");t.textContent=i[e],a[3].appendChild(t)}const r=document.querySelectorAll("li");r[1].className="active",r[0].classList.remove("active"),r[2].classList.remove("active")}function t(){const t=document.querySelector("#content");t.innerHTML="";const n=document.createElement("h3");n.textContent="Modern Take on the French Bistro Classics";const c=document.createElement("h1");c.textContent="Beeza Bistro";const o=document.createElement("h2");o.textContent="Brilliant Combos Bursting with Flavor";const a=document.createElement("button");a.textContent="View Top Rated Dishes",a.addEventListener("click",e),t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(a);const l=document.querySelectorAll("li");l[0].className="active",l[1].classList.remove("active"),l[2].classList.remove("active")}t();const n=document.querySelectorAll("li");n[0].addEventListener("click",t),n[1].addEventListener("click",e),n[2].addEventListener("click",(function(){const e=document.querySelector("#content");e.innerHTML="";const t=document.createElement("h1");t.textContent="Contact";const n=document.createElement("h2");n.textContent="Give us a call to schedule a reservation";const c=document.createElement("h3");c.textContent="(000) 000-0000",c.className="number",e.appendChild(t),e.appendChild(n),e.appendChild(c);const o=document.querySelectorAll("li");o[2].className="active",o[0].classList.remove("active"),o[1].classList.remove("active")}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTaUIsaUJBQWlCLE1BQ3RDUyxFQUFJLEdBQUdqQixVQUFZLFNBQ25CaUIsRUFBSSxHQUFHQyxVQUFVQyxPQUFPLFVBQ3hCRixFQUFJLEdBQUdDLFVBQVVDLE9BQU8sU0FDMUIsQ0N6QkFDLElBR0EsTUFBTUgsRUFBTTFCLFNBQVNpQixpQkFBaUIsTUFDdENTLEVBQUksR0FBR00saUJBQWlCLFFBQVNILEdBQ2pDSCxFQUFJLEdBQUdNLGlCQUFpQixRQUFTbEMsR0FDakM0QixFQUFJLEdBQUdNLGlCQUFpQixTQ1ZULFdBRWIsTUFBTWpDLEVBQVVDLFNBQVNDLGNBQWMsWUFDdkNGLEVBQVFHLFVBQVksR0FFcEIsTUFBTUMsRUFBS0gsU0FBU0ksY0FBYyxNQUNsQ0QsRUFBR0UsWUFBYyxVQUVqQixNQUFNQyxFQUFLTixTQUFTSSxjQUFjLE1BQ2xDRSxFQUFHRCxZQUFjLDJDQUVqQixNQUFNeUIsRUFBSzlCLFNBQVNJLGNBQWMsTUFDbEMwQixFQUFHekIsWUFBYyxpQkFDakJ5QixFQUFHckIsVUFBWSxTQUVmVixFQUFRUSxZQUFZSixHQUNwQkosRUFBUVEsWUFBWUQsR0FDcEJQLEVBQVFRLFlBQVl1QixHQUVwQixNQUFNSixFQUFNMUIsU0FBU2lCLGlCQUFpQixNQUV0Q1MsRUFBSSxHQUFHakIsVUFBWSxTQUNuQmlCLEVBQUksR0FBR0MsVUFBVUMsT0FBTyxVQUN4QkYsRUFBSSxHQUFHQyxVQUFVQyxPQUFPLFNBQzFCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIC8vcGFnZSBoZWFkZXIgY29udGVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIudGV4dENvbnRlbnQgPSBcIkJyaWxsaWFudCBDb21ib3MgQnVyc3Rpbmcgd2l0aCBGbGF2b3JcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoMSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gIC8vbWVudSBpdGVtc1xuICBjb25zdCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbUNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWVudS1pdGVtcyc7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUl0ZW1Db250YWluZXIpO1xuXG4vL2Rpc2ggdHlwZSBuYW1lc1xuICBsZXQgZGlzaFR5cGVOYW1lcyA9IFsnU291cHMnLCAnU2FsYWRzJywgJ0VudHJlZXMnLCAnVG9wIFJhdGVkIERpc2hlcyddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2hUeXBlTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgZGlzaFR5cGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgZGlzaFR5cGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcblxuICAgIGRpc2hUeXBlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkaXNoLXR5cGUtY29udGFpbmVyJztcbiAgICBkaXNoVHlwZU5hbWUuY2xhc3NOYW1lID0gZGlzaFR5cGVOYW1lc1tpXS5yZXBsYWNlKC8gL2csICcnKTtcbiAgICBkaXNoVHlwZU5hbWUudGV4dENvbnRlbnQgPSBkaXNoVHlwZU5hbWVzW2ldO1xuICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2hUeXBlQ29udGFpbmVyKTtcbiAgICBkaXNoVHlwZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNoVHlwZU5hbWUpO1xuICB9XG5cbiAgY29uc3QgZGlzaFR5cGVDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc2gtdHlwZS1jb250YWluZXInKTtcblxuICAvL2Rpc2ggbmFtZXNcbiAgY29uc3Qgc291cE5hbWVzID0gWydGcmVuY2ggT25pb24nLCAnRGFpbHkgU3BlY2lhbCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvdXBOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBzb3VwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzb3VwTmFtZS50ZXh0Q29udGVudCA9IHNvdXBOYW1lc1tpXTtcbiAgICBkaXNoVHlwZUNvbnRhaW5lcnNbMF0uYXBwZW5kQ2hpbGQoc291cE5hbWUpO1xuICB9XG4gIGNvbnN0IHNhbGFkTmFtZXMgPSBbJ0hvdXNlIFNhbGFkJywgJ0JlZXphIFNhbGFkJywgJ1BvYWNoZWQgUGVhciBTYWxhZCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbGFkTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgc2FsYWROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNhbGFkTmFtZS50ZXh0Q29udGVudCA9IHNhbGFkTmFtZXNbaV07XG4gICAgZGlzaFR5cGVDb250YWluZXJzWzFdLmFwcGVuZENoaWxkKHNhbGFkTmFtZSk7XG4gIH1cbiAgY29uc3QgZW50cmVlTmFtZXMgPSBbJ1Jvc2VtYXJ5IFJvYXN0ZWQgQ2hpY2tlbicsICdNdXNocm9vbSBQYXBwYXJkZWxsZScsICdQZXN0byBQYXN0YSddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJlZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGVudHJlZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW50cmVlTmFtZS50ZXh0Q29udGVudCA9IGVudHJlZU5hbWVzW2ldO1xuICAgIGRpc2hUeXBlQ29udGFpbmVyc1syXS5hcHBlbmRDaGlsZChlbnRyZWVOYW1lKTtcbiAgfVxuICBjb25zdCB0b3BSYXRlZE5hbWVzID0gWydNb3Jyb2NhbiBDaGlja2VuIFNhbGFkIFNhbmR3aWNoJywgJ0hhbSAmIEJyaWUnLCAnQnVyZ2VyIFByb3ZlbmFuY2UnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3BSYXRlZE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvcFJhdGVkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0b3BSYXRlZE5hbWUudGV4dENvbnRlbnQgPSB0b3BSYXRlZE5hbWVzW2ldO1xuICAgIGRpc2hUeXBlQ29udGFpbmVyc1szXS5hcHBlbmRDaGlsZCh0b3BSYXRlZE5hbWUpO1xuICB9XG5cbiAgLy9uYXYgYWN0aXZlL2luYWN0aXZlIGNsYXNzXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIG5hdlsxXS5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICBuYXZbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIG5hdlsyXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn0gICIsImltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTGFuZGluZygpIHtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSBcIk1vZGVybiBUYWtlIG9uIHRoZSBGcmVuY2ggQmlzdHJvIENsYXNzaWNzXCI7XG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiQmVlemEgQmlzdHJvXCI7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiQnJpbGxpYW50IENvbWJvcyBCdXJzdGluZyB3aXRoIEZsYXZvclwiO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBcIlZpZXcgVG9wIFJhdGVkIERpc2hlc1wiXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGgzKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoMSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgbmF2WzBdLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XG4gIG5hdlsxXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbmF2WzJdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufSAgIiwiaW1wb3J0IGxvYWRMYW5kaW5nIGZyb20gJy4vbGFuZGluZy5qcyc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5sb2FkTGFuZGluZygpO1xuXG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5uYXZbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTGFuZGluZyk7XG5uYXZbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG5uYXZbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdCk7XG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiR2l2ZSB1cyBhIGNhbGwgdG8gc2NoZWR1bGUgYSByZXNlcnZhdGlvblwiO1xuXG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMudGV4dENvbnRlbnQgPSAnKDAwMCkgMDAwLTAwMDAnO1xuICBoMy5jbGFzc05hbWUgPSAnbnVtYmVyJztcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gIC8vIG5hdi5jbGFzc05hbWUucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbmF2WzJdLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XG4gIG5hdlswXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbmF2WzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufSAgIl0sIm5hbWVzIjpbImxvYWRNZW51IiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsImgxIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiaDIiLCJhcHBlbmRDaGlsZCIsIm1lbnVJdGVtQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiZGlzaFR5cGVOYW1lcyIsImkiLCJsZW5ndGgiLCJkaXNoVHlwZUNvbnRhaW5lciIsImRpc2hUeXBlTmFtZSIsInJlcGxhY2UiLCJkaXNoVHlwZUNvbnRhaW5lcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic291cE5hbWVzIiwic291cE5hbWUiLCJzYWxhZE5hbWVzIiwic2FsYWROYW1lIiwiZW50cmVlTmFtZXMiLCJlbnRyZWVOYW1lIiwidG9wUmF0ZWROYW1lcyIsInRvcFJhdGVkTmFtZSIsIm5hdiIsImNsYXNzTGlzdCIsInJlbW92ZSIsImxvYWRMYW5kaW5nIiwiaDMiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==