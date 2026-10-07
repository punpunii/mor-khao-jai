/* MOR KHAO JAI — real back navigation */
(function(){
  function sameOriginReferrer(){
    try{return document.referrer && new URL(document.referrer).origin===location.origin;}catch(e){return false;}
  }
  function wire(){
    document.querySelectorAll('a.back, a.back-btn, a[data-back]').forEach(a=>{
      if(a.dataset.mkjBackWired==='1') return;
      a.dataset.mkjBackWired='1';
      a.addEventListener('click',function(e){
        if(sameOriginReferrer() && history.length>1){
          e.preventDefault();
          history.back();
        }
      });
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',wire); else wire();
})();
