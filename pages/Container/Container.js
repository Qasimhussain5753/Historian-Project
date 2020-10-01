import React from 'react'
import SidebarMenu from '../../components/Container/SidebarMenu/SidebarMenu';
import Personalities from '../../components/Container/Personalities/Personalities.js';
import Leaflet from '../../components/Container/leaflet/Leaflet';
import Histropedia  from '../../components/Container/Timeline/Histropedia'
// import FamilyTree from '../../components/Container/FamilyTree/FamilyTree'
const Container =()=>{
    return(
        <div id="Container">
          <SidebarMenu />
            <div className="content-wrapper">
                <section className="content">
                  <div className="container-fluid ">
                    {/* <Personalities /> */}
                    <Leaflet />
                    {/* <FamilyTree /> */}
                    <Histropedia />

                  </div>
                </section>
            </div>
        </div>
    );
}
export default Container;