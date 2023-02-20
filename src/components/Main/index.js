import React from 'react'
import { Link } from 'react-router-dom';

import itadori from '../../Assets/Imagens/Itadori_Logo_braca.png'

import '../Main/main.css';

import Takagi from '../../Assets/Imagens/Banner-Takagi-san.jpg'
import Komi from '../../Assets/Imagens/Banner-Komi-san.jpg'
import Amagami from '../../Assets/Imagens/Banner-Amagami-SS2.jpg'
import Phone from '../../Assets/Imagens/Smart-Phone.png'
import Instagram from '../../Assets/Redes sociais/Instagram2.png'
import Facebook from '../../Assets/Redes sociais/Facebook2.png'
import Dsicord from '../../Assets/Redes sociais/Discord2.png'
import Spotify from '../../Assets/Redes sociais/Spotfy2.png'

import Oneoh from '../../Assets/Partner Artists/3-One-Oh.jpg'
import Caroline from '../../Assets/Partner Artists/Caroline.jpg'
import Hurshel from '../../Assets/Partner Artists/Hurshel.jpg'
import Ryyzn from '../../Assets/Partner Artists/RYYZN.jpg'
import Scott from '../../Assets/Partner Artists/Scott-the -pisces.jpg'
import Shadow from '../../Assets/Partner Artists/Shadowkey.jpg'
import Cadmium from '../../Assets/Partner Artists/CADMIUM.jpg'
import Neffex from '../../Assets/Partner Artists/NEFFEX.jpg'

import Banner from '../../Assets/Imagens/Banner_End_Itadori.jpg'


import Footer from '../Footer';

export default function Main() {
  return (
    <div className='container'>
        
        <h4>

            <img className='logoita' src={itadori} alt="" /> <br />

               <div className='spancontainer'>
                 <div className='adjustspan'>
                              <span>ITADORI AMV's is proud to offer unique value to the general anime community by editing high quality videos using different animations to create something totally unique with my editing. All songs featured on my channel are licensed under Creative Commons or allowed by the original artists. All videos are edited in the highest quality which makes up different scenes from various free commercial animation images! thanks to the animation developers! </span> <br /> <br />
                 
                               <span>We have a team of Professional Editors focused on editing AMV's for over 8 years, our work has provided impactful narratives for all songs, giving visibility to countless unknown artists through the construction of their Anime Music Videos. </span> <br /> <br />
                 
                              <span>My goal is to bring another way to enjoy animation by bringing together the two things that youtube audiences love the most, music and animations, and inspire people in that way. </span>  <br /> <br />
                 
                             <span>Want to know what's new in the animation industry? Watch this channel. Want to discover new artists and music genres to listen to? Our channel brings all this and more to you!</span> <br /> <br />
                 </div>
               </div>

        </h4>

        <main>

          <div className="topvideos">
            <strong className='strongsize'> Top Vídeos 🍿 </strong>
          </div>

          <div className="themain">

              <div> <Link to="https://www.youtube.com/watch?v=0uOgPFnQoqs" target={'_blank'}><img className='animejust' src={Takagi} alt="" /></Link> <h6> What do you think?「AMV」Midara na Ao-chan wa Benkyou ga Dekinai ᴴᴰ </h6> </div>

              <div> <Link to="https://www.youtube.com/watch?v=rIHRKNGLHy4" target={'_blank'}><img className='amagamiss' src={Komi} alt="" /></Link> <h6> W-What Kiss?!「AMV」Komi-san wa, Comyushou desu ᴴᴰ </h6> </div>

              <div> <Link to="https://www.youtube.com/watch?v=zhs_o4UypA0" target={'_blank'}><img className='komi' src={Amagami} alt="" /></Link> <h6> He wants to kiss behind my knee!? 「AMV」 Amagami SS ᴴᴰ </h6> </div>

          </div>

          <div className="test1">

              <Link to="https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1" target={'_blank'}><img className='smartphone' src={Phone} alt="" /></Link>
              <div className="helpme">

                <h2 className='font-ajust'> Follow Us </h2>
                <div> <Link to={"https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1"} target="_blank"><button className='youtubebutton'> Youtube </button></Link> </div>
                <h3 className='leviotario'> Also Available on </h3>

                  <div className='sociaisi-medias'>

                      <div className="instagram"><Link to={"https://www.instagram.com/itadoriamvs/"} target={'_blank'}><img className='omgthis' src={Instagram} alt="" /></Link> </div>

                      <div className="facebook"><Link to={"https://www.facebook.com/itadoriAmvs/"} target={'_blank'} ><img className='omgthis' src={Facebook} alt="" /></Link> </div>

                      <div className="discord"><Link to={"https://discord.gg/S9zuxBk63j"} target={'_blank'} ><img className='omgthis' src={Dsicord} alt="" /></Link> </div>

                      <div className="spotify"> <Link to={"https://open.spotify.com/playlist/014b4czBf3KpakT72aKnx6"} target={'_blank'} ><img className='omgthis' src={Spotify} alt="" /></Link> </div>

                  </div>

              </div>

          </div>

          <div className="papart"> <h2 className='manpqp'> Partner Artists </h2> </div>
          <div className="columjust">

            <div>

                <p>

                  <strong> 3 ONE OH </strong> <br /> <br />
                  <strong> SCOTT THE PISCES </strong> <br /> <br />

                </p>

            </div>

            <div className="caHu">

              <p>

                <strong> CAROLINE </strong> <br /> <br />
                <strong> SHADOWKEY </strong> <br /> <br />

              </p>

            </div>

            <div className="ScoRyy">

              <p>

                <strong> HURSHEL </strong> <br /> <br />
                <strong> CADMIUM </strong> <br /> <br />

              </p>

            </div>

            <div className="rYnE">

              <p>

                <strong> RYYZN </strong> <br /> <br />
                <strong> NEFFEX </strong>

              </p>

            </div>

          </div>

            <div className='containercenterall'>
              <div className="centerall">
                <Link to={'https://www.youtube.com/c/3OneOhOfficial/featured'} target={'_blank'}><img className='adjustthis' src={Oneoh} alt="" /></Link>
                <Link to={'https://www.youtube.com/c/Carolinesmusic/featured'} target={'_blank'}><img className='adjustthis' src={Caroline} alt="" /></Link>
                <Link to={'https://www.youtube.com/c/Hurshel'} target={'_blank'} ><img className='adjustthis' src={Hurshel} alt="" /></Link>
                <Link to={'https://www.youtube.com/c/RYYZNMUSIC'} target={'_blank'}><img className='adjustthis' src={Ryyzn} alt="" /></Link>
                <Link to={'https://www.youtube.com/c/ScottThePisces'} target={'_blank'}><img className='adjustthis' src={Scott} alt="" /></Link>
                <Link to={'https://www.youtube.com/c/Shadowkey/featured'} target={'_blank'}><img className='adjustthis' src={Shadow} alt="" /></Link>
                <Link to={'https://www.youtube.com/c/Cadmiumsound'} target={'_blank'}><img className='adjustthis' src={Cadmium} alt="" /></Link>
                <Link to={'https://www.youtube.com/user/neffexmusic'} target={'_blank'}><img className='adjustthis' src={Neffex} alt="" /></Link>
              </div>
            </div>

            <div className='partinecontainer'>

              <h2 className='partine'> If you want to be part of our partners, send an email to itadoriamvsbusiness@gmail.com
          That way we can make the best of our content with your help, thus helping both of you.
          We at ITADORI AMV'S look forward to your contact. </h2>

            </div>

        </main>

        <div className='pictureajust'>

            <Link to={'https://www.youtube.com/channel/UCn331wBdwv1oApYpa1vOfVw?sub_confirmation=1'} target={'_blank'}><img className='saudavel' src={Banner} alt="" /></Link>

        </div>

        <Footer/>

        

    </div>
  )
}
