/* Original-resolution image viewer, scoped to the Weee case study. */
(() => {
  if (new URLSearchParams(location.search).get('id') !== 'weee-on-demand') return;
  const images = [...document.querySelectorAll('main img')].filter(img => img.getAttribute('src')?.startsWith('images/weee/'));
  if (!images.length) return;
  const style = document.createElement('style');
  style.textContent = `.weee-zoom-trigger{cursor:zoom-in}.weee-zoom-trigger:focus-visible{outline:2px solid #e30613;outline-offset:4px}.weee-image-dialog{border:0;padding:0;width:96vw;max-width:1800px;height:94dvh;max-height:94dvh;background:#fff;color:#0a0a0a}.weee-image-dialog::backdrop{background:rgba(0,0,0,.8)}.weee-image-toolbar{display:flex;justify-content:flex-end;gap:12px;padding:12px;border-bottom:1px solid #ddd}.weee-image-toolbar button{font:inherit;background:white;color:#0a0a0a;border:1px solid #0a0a0a;padding:8px 14px;cursor:pointer}.weee-image-stage{height:calc(100% - 70px);overflow:auto;padding:20px;text-align:center}.weee-image-stage img{display:block;width:auto;height:auto;max-width:100%;max-height:100%;margin:auto}.weee-image-stage.is-actual img{max-width:none;max-height:none;margin:0}`;
  document.head.append(style);
  const dialog=document.createElement('dialog'); dialog.className='weee-image-dialog'; dialog.setAttribute('aria-label','Project image');
  dialog.innerHTML='<div class="weee-image-toolbar"><button type="button" class="weee-size">Actual size</button><button type="button" class="weee-close">Close</button></div><div class="weee-image-stage"><img alt=""></div>';
  document.body.append(dialog);
  const stage=dialog.querySelector('.weee-image-stage'), preview=stage.querySelector('img'), toggle=dialog.querySelector('.weee-size');
  let previousOverflow='';
  const open=img=>{preview.src=img.currentSrc||img.src;preview.alt=img.alt;stage.classList.remove('is-actual');toggle.textContent='Actual size';previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();};
  images.forEach(img=>{img.classList.add('weee-zoom-trigger');img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label',`Enlarge: ${img.alt||'project image'}`);img.addEventListener('click',()=>open(img));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(img);}});});
  toggle.onclick=()=>{const actual=stage.classList.toggle('is-actual');toggle.textContent=actual?'Fit image':'Actual size';};
  dialog.querySelector('.weee-close').onclick=()=>dialog.close();
  dialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;});
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
})();
