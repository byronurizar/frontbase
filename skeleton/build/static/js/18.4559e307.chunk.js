(this["webpackJsonpable-pro-v16.12.0"]=this["webpackJsonpable-pro-v16.12.0"]||[]).push([[18],{346:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),o=t.n(c),i=t(10),l=t(13),s=t(71),u=t(21),d=t(249),m=t(265),p=t(359),f=t(86),b=t.n(f),E=t(87),I=t.n(E),v=t(22),h=t(14),g=t(15),O=t(9),j=t(360),x=t(26),y=t(11),N=t(23),C=t(18),k=function(e){var a=e.dataInicial,t=e.abrirModal,c=e.setAbrirModal,s=e.catPaises,d=e.GetDepartamentos,m=Object(N.a)(a),p=Object(l.a)(m,2),f=p[0],b=p[1],E=Object(n.useState)(!1),I=Object(l.a)(E,2),v=I[0],h=I[1],k=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)("departamento",{method:"POST",body:JSON.stringify(f)});case 2:e.sent&&(Object(O.b)("Departamento registrado exitosamente"),d(),c(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)("departamento",{method:"PUT",body:JSON.stringify(f)});case 2:(a=e.sent)&&(Object(O.b)(a),d()),c(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),h(!0),!(a.departamentoId>0)){e.next=7;break}return e.next=5,w();case 5:e.next=9;break;case 7:return e.next=9,k();case 9:h(!1);case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(j.a,{show:t,onHide:function(){return c(!1)}},!0===v?r.a.createElement(C.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,{as:"h5"},a.departamentoId>0?"Actualizar departamento":"Nuevo departamento")),r.a.createElement(j.a.Body,null,r.a.createElement(y.ValidationForm,{onSubmit:S,onErrorSubmit:function(e,a,t){Object(O.c)("Por favor complete toda la informaci\xf3n solicitada por el formulario")}},r.a.createElement(x.a.Row,null,r.a.createElement(x.a.Group,{as:u.a,md:"12"},r.a.createElement(x.a.Label,{htmlFor:"departamentoId"},"C\xf3digo de departamento"),r.a.createElement(y.TextInput,{name:"departamentoId",id:"departamentoId",required:!0,value:f.departamentoId,onChange:b,errorMessage:"Campo obligatorio",placeholder:"C\xf3digo Departamento",autoComplete:"off",readOnly:a.departamentoId>0,type:"number"})),r.a.createElement(x.a.Group,{as:u.a,md:"12"},r.a.createElement(x.a.Label,{htmlFor:"paisId"},"Pais"),r.a.createElement(y.SelectGroup,{name:"paisId",id:"paisId",required:!0,value:f.paisId,onChange:b,errorMessage:"Campo obligatorio"},r.a.createElement("option",{value:""},"Seleccione un tipo pais"),s.map((function(e){var a=e.paisId,t=e.descripcion;return r.a.createElement("option",{value:a,key:a},t)})))),r.a.createElement(x.a.Group,{as:u.a,md:"12"},r.a.createElement(x.a.Label,{htmlFor:"descripcion"},"Nombre"),r.a.createElement(y.TextInput,{name:"descripcion",id:"descripcion",required:!0,value:f.descripcion,onChange:b,errorMessage:"Campo obligatorio",style:{textTransform:"capitalize"},placeholder:"Nombre departamento",autoComplete:"off",type:"text"})),a.departamentoId>0&&r.a.createElement(x.a.Group,{as:u.a,md:"12"},r.a.createElement(x.a.Label,{htmlFor:"estadoId"},"Estado"),r.a.createElement(y.SelectGroup,{name:"estadoId",id:"estadoId",value:f.estadoId,required:!0,errorMessage:"Campo obligatorio",onChange:b},r.a.createElement("option",{value:""},"Seleccione un estado"),r.a.createElement("option",{value:"1"},"Activo"),r.a.createElement("option",{value:"2"},"Inactivo"))),r.a.createElement("div",{className:"col-sm-3"}),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"button",onClick:function(){c(!1)},className:"btn btn-warning"}," Cancelar")),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"submit",className:"btn btn-success"}," ",a.departamentoId>0?"Actualizar":"Registrar")))))))},w=t(94),S=t(80),T=function(){var e=Object(v.d)((function(e){return e})),a=Object(n.useState)(!0),t=Object(l.a)(a,2),c=t[0],f=t[1],E=Object(n.useState)([]),j=Object(l.a)(E,2),x=j[0],y=j[1],N=Object(n.useState)(!1),T=Object(l.a)(N,2),A=T[0],D=T[1],M=Object(n.useState)([]),z=Object(l.a)(M,2),F=z[0],P=z[1],G=Object(n.useState)([]),L=Object(l.a)(G,2),_=L[0],q=L[1],B={departamentoId:"",paisId:"",descripcion:"",estadoId:1},H=Object(n.useState)(B),J=Object(l.a)(H,2),R=J[0],U=J[1],V=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x.find((function(e){return 8===e.menuId&&3===e.accesoId}))){e.next=7;break}return e.next=3,Object(g.a)("pais?include=0?estadoId=1");case 3:(a=e.sent)&&P(a),e.next=8;break;case 7:P([{paisId:"",descripcion:"No esta autorizado"}]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x.find((function(e){return 9===e.menuId&&3===e.accesoId}))){e.next=7;break}return f(!0),e.next=4,Object(g.a)("departamento?estadoId=1;2");case 4:(a=e.sent)&&(Object(w.b)("#mytable"),q(a),Object(w.a)("#mytable")),f(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){if(null===e||void 0===e?void 0:e.accesos){var a=e.accesos.filter((function(e){return 9===e.menuId||8===e.menuId}));y(a)}f(!1)}()}),[]),Object(n.useEffect)((function(){W(),V()}),[x]),r.a.createElement(h.a,null,r.a.createElement(s.a,{className:"btn-page"},r.a.createElement(u.a,{sm:12},r.a.createElement(d.a,null,r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Title,{as:"h5"},"Departamentos")),r.a.createElement(d.a.Body,null,!0===c?r.a.createElement(C.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{className:"align-items-center m-l-0"},r.a.createElement(u.a,null),r.a.createElement(u.a,{className:"text-right"},x.find((function(e){return 9===e.menuId&&1===e.accesoId}))&&r.a.createElement(m.a,{variant:"success",className:"btn-sm btn-round has-ripple",onClick:function(){D(!0),U(B)}},r.a.createElement("i",{className:"feather icon-plus"})," Agregar departamento"))),x.find((function(e){return 9===e.menuId&&3===e.accesoId}))?r.a.createElement(p.a,{striped:!0,hover:!0,responsive:!0,bordered:!0,id:"mytable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Codigo"),r.a.createElement("th",null,"Departamento"),r.a.createElement("th",null,"Pais"),r.a.createElement("th",null,"Estado"),x.find((function(e){return 9===e.menuId&&2===e.accesoId||9===e.menuId&&4===e.accesoId}))&&r.a.createElement("th",null))),r.a.createElement("tbody",null,_.map((function(e){var a=e.departamentoId,t=e.descripcion,n=e.Pais.descripcion,c=e.Estado.descripcion;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a),r.a.createElement("td",null,t),r.a.createElement("td",null,n),r.a.createElement("td",null,c),x.find((function(e){return 9===e.menuId&&2===e.accesoId||9===e.menuId&&4===e.accesoId}))&&r.a.createElement("td",{style:{textAlign:"center"}},x.find((function(e){return 9===e.menuId&&2===e.accesoId}))&&r.a.createElement("button",{className:"btn-icon btn btn-info btn-sm",onClick:function(){!function(e){var a=_.find((function(a){return a.departamentoId===e})),t=a.departamentoId,n=a.paisId,r=a.descripcion,c=a.estadoId;U({departamentoId:t,paisId:n,descripcion:r,estadoId:c}),D(!0)}(a)}},r.a.createElement("i",{className:"feather icon-edit"})),x.find((function(e){return 9===e.menuId&&4===e.accesoId}))&&r.a.createElement("button",{className:"btn-icon btn btn-danger btn-sm",onClick:function(){var e;e=a,I()(b.a).fire({title:"Alerta?",text:"Esta seguro que desea eliminar el elemento",type:"warning",showCloseButton:!0,showCancelButton:!0}).then(function(){var a=Object(i.a)(o.a.mark((function a(t){var n,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.value){a.next=8;break}return a.next=4,Object(g.a)("departamento/".concat(e),{method:"DELETE"});case 4:(n=a.sent)&&(Object(O.b)(n),r=_.filter((function(a){return a.departamentoId!==e})),q(r)),a.next=9;break;case 8:Object(O.c)("No se elimin\xf3 ning\xfan elemento");case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())}},r.a.createElement("i",{className:"feather icon-trash-2"}))))})))):r.a.createElement(S.a,null)),!0===A&&r.a.createElement(k,{abrirModal:A,setAbrirModal:D,catPaises:F,GetDepartamentos:W,dataInicial:R}))))))};a.default=function(){return r.a.createElement(T,null)}},80:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),c=t(71),o=t(21),i=t(358),l=t(14),s=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{variant:"danger"},r.a.createElement(i.a.Heading,{as:"h4"},"Informaci\xf3n!"),r.a.createElement("p",null,"No esta autorizado para poder visualizar los elementos"),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Comuniquese con el administrador para la asignaci\xf3n de permisos")))))}},94:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return o}));var n=t(93),r=t.n(n);r.a.DataTable=t(132),t(142);var c=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;r()(e).DataTable({searching:!0,bLengthChange:!1,bAutoWidth:!1,lengthMenu:[[10,25,50,-1],[10,25,50,"Todos"]],displayLength:a,language:{processing:"Cargando informaci\xf3n",search:"Filtrar por:",lengthMenu:"Mostrar _MENU_ filas",info:"Vizualizaci\xf3n  _END_ de _TOTAL_ filas",infoEmpty:"Vizualizaci\xf3n del elemento 0 a 0 de 0 filas",infoFiltered:"(Filtrado de _MAX_ filas en total)",infoPostFix:"",loadingRecords:"Cargando...",zeroRecords:"No se logr\xf3 encontrar ninguna coincidencia",emptyTable:"No existen registros",paginate:{first:"Primera",previous:"Anterior",next:"Siguiente",last:"Ultima"},aria:{sortAscending:": active para ordenar la columna en orden ascendente",sortDescending:": active para ordenar la columna en orden descendente"}}})},o=function(e){r()(e).DataTable().destroy()}}}]);
//# sourceMappingURL=18.4559e307.chunk.js.map