import React from 'react'
import Tabs from './Tabs'
import Footer from './Footer'

function AboutUs() {
  return (
    <div className='wrapper-about-us'>
      <Tabs />
      <section>
        <h1 className='name'>Jewerly</h1>

        <span className='about-us'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Blanditiis eaque architecto alias ullam ipsa? Inventore, a eius blanditiis quam tempora saepe, excepturi rerum minima tempore eligendi, 
        aliquam eos iste vitae? Dolor reiciendis soluta hic maiores deleniti ad aut aliquam sint nisi, et, 
        fuga adipisci eius dolorem optio quas ut est nemo ab! Modi vero quaerat eum ab, cupiditate inventore velit.
        Fugiat ipsum aspernatur, nam quisquam, ea corrupti possimus hic delectus nostrum iure iusto explicabo suscipit unde vitae voluptatem vel 
        veritatis dolor sequi perspiciatis aliquam ab. Unde repellendus mollitia illo expedita! Ad modi excepturi deserunt. 
        Perspiciatis iure doloremque non quam placeat obcaecati quibusdam repellendus! Recusandae laboriosam consectetur sint dolores veritatis 
        cupiditate fuga autem in, esse facilis labore nemo. Ad, commodi quasi! Vero quod architecto accusamus cum fuga natus eos commodi doloribus perferendis dolores 
        unde sapiente facilis, autem impedit aliquam ab. Veritatis commodi rem sunt exercitationem adipisci cum nihil quisquam mollitia ipsum.</span>
      </section>

      <section>
        <h2 className='contact-title'>
          Номер гарячої ліній:
          <p className='contact-number'>123-456-7890</p>
        </h2>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs