// Generate stars
  const starsEl = document.getElementById('stars');
  for(let i=0;i<130;i++){
    const s = document.createElement('div');
    s.className='star';
    const size = Math.random()*2+1;
    s.style.width = size+'px';
    s.style.height = size+'px';
    s.style.top = Math.random()*100+'%';
    s.style.left = Math.random()*100+'%';
    s.style.animationDelay = (Math.random()*4)+'s';
    starsEl.appendChild(s);
  }

  // Reveal on scroll
  document.querySelectorAll('.reveal').forEach(el=>{
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.disconnect(); } });
    },{threshold:0.12});
    io.observe(el);
  });

  // Bar fills
  document.querySelectorAll('.bar-fill').forEach(bar=>{
    const io = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting){ bar.style.width = bar.dataset.w+'%'; io.disconnect(); } });
    },{threshold:0.4});
    io.observe(bar);
  });

  // Scroll-spy bottom nav
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('main section');
  const setActive = (id)=>{
    navItems.forEach(n=> n.classList.toggle('active', n.dataset.target===id));
  };
  const spy = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ setActive(e.target.id); }
    });
  },{rootMargin:'-45% 0px -45% 0px'});
  sections.forEach(s=>spy.observe(s));
  setActive('home');
