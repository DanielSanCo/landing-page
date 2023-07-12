import Image from 'next/image'
import styles from './page.module.css'
import produtos from '../../utils/produto';
import { useState } from 'react';
//import { useState } from 'react';

var menu = [
  { name: "SITE", link: 'https://www.google.com' },
  { name: "PRODUTOS", link: 'https://www.google.com' },
]

export default function Home() {
  const porcentagem = (produtos[0].oldPrice - produtos[0].price) / produtos[0].oldPrice * 100;
  const [hidden, setHidden] = useState('none');

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var scrollPosition = window.scrollY;

    if (prevScrollpos < currentScrollPos && scrollPosition > 50) {
      setHidden('none')
    } else {
      setHidden('flex')
    }

    prevScrollpos = currentScrollPos;
}
  return (
    <main className={styles.main}>
      <header className={styles.header} style={{display: hidden}}>
        <div className={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo" />
        </div>
        <div className={styles.menu}>
          {menu.map((item, index) => (
            <div className={styles.menuItem} key={index}><a href={item.link}>{item.name}</a></div>
          ))}
        </div>
        <div className={styles.zap}>
          <img src="./images/zap-logo.png" alt="" />
        </div>
      </header>
      <div className={styles.espaço2}></div>
      <div className={styles.frete}>
        Frete gratis para toda a Região do Rio das Pedras
      </div>
      <div className={styles.content}>
        <div className={styles.espaço}></div>
        <div className={styles.titulo}>
          <h1>{produtos[0].name}</h1>
          <div className={styles.subTitle}>Gravar videos e lives em alta qualidade</div>
        </div>
        <div className={styles.prodArea}>
          <img src="./images/microfoneBOYA.png" alt="" className={styles.imgProd} />
          <div className={styles.prodInfo}>
            <div className={styles.estadoProd}>Produto usado uma vez, Novo na caixa</div>
            <p>Especificações:<br />
              - Padrão Polar<br />
              - Omnidireccional Transdutor<br />
              - Condensador Frequência De Resposta: 65hz ~ 18khz Sinal<br />
              - Ruído: 74db Spl<br />
              - Sensibilidade: 30db +/- 3 Db / 0db = 1v / Pa , 1khz<br />
              - Impedância: 1000 Oh<br />
              - Tipo Bateria: Lr44<br />
              - Dimensões: 18,00 Mmx 8,30 Mmx 8,30 Mm</p>
          </div>
          <div className={styles.priceArea}>
            <div className={styles.oferta}>Oferta!</div>
            <div className={styles.oldPrice}>R$ {produtos[0].oldPrice},00</div>
            <div className={styles.price}>R$ {produtos[0].price},00</div>
            <div id="porcentagem" className={styles.porcentagem}>{porcentagem.toFixed(0)}% de Desconto</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>Comprar no Site</div>
            <a
              href="https://api.whatsapp.com/send?phone=21982566037&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20produto.">
              <div className={styles.button2}>
                <img src="./images/zap-logo.png" alt="" className={styles.imgButton} />
                Pedir Entrega Hoje
              </div>
            </a>
          </div>
        </div>
        <div className={styles.espaço}></div>
      </div>
    </main>
  )
}
