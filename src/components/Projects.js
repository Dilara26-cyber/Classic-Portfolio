import React from 'react';
import peterImg from '../images/peter__img.png';
import ipImg from '../images/ip__img.png';
import manageImg from '../images/manage__img.png';
import photoImg from '../images/photograppy__img.png';
import dasherImg from '../images/copy-of-dasher-and-crank__img.png';
import portfolioImg from '../images/portfolio__img.png';
import '../styles/projects.scss';
const Projects = () => {
  return (
    <section className="section-center" id="projects">
      <div className="projects-section left"></div>
      <div className="projects-section right"></div>
      <h1>Projeler</h1>
      <div className="projects">
        <div className="projects__card">
          <div className="projects__card--img">
            <img src={peterImg} alt="Screen shot of project Peter Answers" />
          </div>
          <div className="projects__card--details">
            <h3>Peter Answers</h3>
            <p>
              Peter Answers sorduğunuz sorulara en doğru cevabı veren bir site.
              Kullanıcı "petition" kısmında noktaya basınca oyunu başlatır.
              Kendi sorusunun cevabını oraya girer fakat cevabı farklı bir
              mesajla gizlenir. Böylece kullanıcının hile yaptığı anlaşılmaz.
              Kullanıcı "question" kısmına sorusunu sorup gönderdiğinde aslında
              yazdığı cevabı alır.
            </p>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card--img">
            <img src={ipImg} alt="Screen shot of project IP Address Tracker" />
          </div>
          <div className="projects__card--details">
            <h3>IP Address Tracker</h3>
            <p>
              IP Address Tracker kullanıcılara kendi IP adreslerinin kayıtlı
              olduğu adresi harita üzerinde görme imkanı sunar. Ip adresleri
              hakkında diğer bilgileri de ekranda gören kullanıcılar herhangi
              bir domain ya da IP adresini de arayıp bilgilerine ulaşabilirler.
              Arama sonucundan herhangi bir dönüt alınmazsa kullanıcıları bir
              hata mesajı karşılar.
            </p>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card--img">
            <img
              src={manageImg}
              alt="Screen shot of project IP Address Tracker"
            />
          </div>
          <div className="projects__card--details">
            <h3>Manage Landing Page</h3>
            <p>
              Farazi bir şirkete ait bir landing page. Tasarımdan koda dökülmüş
              olup kullanıcılara her cihazda ideal görüntü sunar. Navbar ya da
              hero kısmındaki "get started"a tıklandığında kullanıcı bir form
              ile karşılaşır. Bu formda gerekli alanları gerektiği gibi
              doldurmazsa formu gönderemez.
            </p>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card--img">
            <img src={photoImg} alt="Screen shot of project Photograppy" />
          </div>
          <div className="projects__card--details">
            <h3>Photograppy</h3>
            <p>
              Kullanıcıların fotoğraflarını ekleyip, düzenleyip
              indirebilecekleri react ile hazırlanmış bir fotoğraf uygulaması.
            </p>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card--img">
            <img
              src={dasherImg}
              alt="Screen shot of project Dasher &amp; Crank"
            />
          </div>
          <div className="projects__card--details">
            <h3>Dasher &amp; Crank</h3>
            <p>
              Gastby ile hazırlanmış e-ticaret ve sayfalar arası hızlı link
              kullanımını içeren dizayndan kopyalanmış bir websitesi. Mağaza
              verileri Gatsby ile uyumlu çalışan Contentful kullanılarak
              eklenmiştir.
            </p>
          </div>
        </div>
        <div className="projects__card">
          <div className="projects__card--img">
            <img src={portfolioImg} alt="Screen shot of project portfolio" />
          </div>
          <div className="projects__card--details">
            <h3>Portfolyo</h3>
            <p>
              Gastby ile hazırlanmış portolyo websitem. Proje içerikleri Gatsby
              ile uyumlu çalışan Strapi kullanılarak eklenmiştir. SEO için react
              helmet kütüphanesi kullanılmıştır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
