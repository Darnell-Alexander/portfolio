import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const BackgroundParticles = () =>{
     const particlesInit = async (main) => {
            // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            await loadFull(main);
          };
         
          const particlesLoaded = (container) => {
            console.log(container);
          };
       
          return (
            <div className="App">
           
             <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    background: {
                      color: '#181818',
                    },
                    particles:{
                      number:{
                        value:100
                      },
                      line_linked:{
                        enable:true
                      },
                      move:{
                        enable:true
                      },
    
                      
                    },
                    interactivity:{
                      events:{
                        onhover:{
                          enable:true,
                          mode: ["grab" , "bubble"]
                        }
                      }
                    }
                  }}
              />  
          </div>
    )
}

export default BackgroundParticles;