"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[481],{8735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(4848),i=n(8453);const r={sidebar_position:5},o="Automatische Updates",d={id:"guides/automatic-updates",title:"Automatische Updates",description:"Configuratie van Automatische Updates met Cron",source:"@site/i18n/nl/docusaurus-plugin-content-docs/current/guides/automatic-updates.md",sourceDirName:"guides",slug:"/guides/automatic-updates",permalink:"/nl/guides/automatic-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/thijsvanloef/palworld-server-docker/tree/main/docusaurus/docs/guides/automatic-updates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Automatische herstarts",permalink:"/nl/guides/automatic-reboots"},next:{title:"Running without root",permalink:"/nl/guides/running-without-root"}},a={},c=[{value:"Configuratie van Automatische Updates met Cron",id:"configuratie-van-automatische-updates-met-cron",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"automatische-updates",children:"Automatische Updates"}),"\n",(0,s.jsx)(t.h2,{id:"configuratie-van-automatische-updates-met-cron",children:"Configuratie van Automatische Updates met Cron"}),"\n",(0,s.jsx)(t.p,{children:"Om automatische updates met deze server te kunnen gebruiken, moeten de volgende omgevingsvariabelen worden ingesteld op true:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"RCON_ENABLED"}),"\n",(0,s.jsx)(t.li,{children:"UPDATE_ON_BOOT"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.p,{children:"Als docker restart niet is ingesteld op het beleid always of unless-stopped,\ndan zal de server afsluiten en moet handmatig opnieuw worden gestart."}),(0,s.jsxs)(t.p,{children:["Het voorbeeld docker run commando en docker compose bestand in de ",(0,s.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/",children:"de Snelle installatie"}),"\ngebruiken al het vereiste beleid."]})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{children:"Info"}),(0,s.jsx)(t.th,{children:"Default Values"}),(0,s.jsx)(t.th,{children:"Allowed Values"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_UPDATE_CRON_EXPRESSION"}),(0,s.jsx)(t.td,{children:"De instelling be\xefnvloedt de frequentie van automatische updates."}),(0,s.jsx)(t.td,{children:"0 * * * *"}),(0,s.jsxs)(t.td,{children:["Heeft een Cron expressie nodig - Zie ",(0,s.jsx)(t.a,{href:"https://palworld-server-docker.loef.dev/nl/guides/backup/automated-backup",children:"Configuring Automatic Backups with Cron"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_UPDATE_ENABLED"}),(0,s.jsx)(t.td,{children:"Schakelt automatische updates in."}),(0,s.jsx)(t.td,{children:"false"}),(0,s.jsx)(t.td,{children:"true/false"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AUTO_UPDATE_WARN_MINUTES"}),(0,s.jsx)(t.td,{children:"Hoe lang moet er gewacht worden voordat de server wordt bijgewerkt"}),(0,s.jsx)(t.td,{children:"30"}),(0,s.jsx)(t.td,{children:"!0"})]})]})]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Deze image gebruikt Supercronic voor cron-jobs.\nzie ",(0,s.jsx)(t.a,{href:"https://github.com/aptible/supercronic#crontab-format",children:"supercronic"}),"\nof ",(0,s.jsx)(t.a,{href:"https://crontab-generator.org",children:"Crontab Generator"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Stel ",(0,s.jsx)(t.code,{children:"AUTO_UPDATE_CRON_EXPRESSION"})," in om het standaardschema te wijzigen."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);