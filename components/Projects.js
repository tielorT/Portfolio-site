import styles from '../styles/Projects.module.css'
import { IconContext } from "react-icons";
import Image from 'next/image';
import img1 from '../public/img1.png'
import img2 from '../public/img2.png'
import { SiGithub } from 'react-icons/si'
import { BiLinkExternal } from 'react-icons/bi'

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>My Projects</h2>
            <div style={{ width: '100%'}}>
                <div className={styles.projectContent}>
                    <div className={styles.project}>
                        <div>
                            <h4>Mexican Restaurant Site</h4>
                            <p>A Restaurant site where users can add porducts to a cart.
                                Utilizing nextjs/react, mongodb, and aws to create a functioning Website.
                            </p>
                            <div>
                                <SiGithub />
                            </div>
                        </div>
                        <div style={{ position: 'relative'}}>
                            <Image  className={styles.img} src={img1} width={400} height={300} alt='img'/>
                            <IconContext.Provider value={{ size: '50px'}}>
                            <div className={styles.externalLink}>
                                <BiLinkExternal style={{ size: '90px'}}/>
                            </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div>
                            <h4>Favourite Sweets Website</h4>
                            <p>A Website to showcase my front-end abilities while 
                               showing you my Favourite sweets to eat! project
                               uses React/Nextjs bootstrap, and html/css.  </p>
                            <div>
                                <SiGithub />
                            </div>   
                        </div>
                        <div style={{ position: 'relative'}}>
                        <Image  className={styles.img} src={img2} width={400} height={300} alt='img'/>
                        <IconContext.Provider value={{ size: '50px'}}>
                            <div className={styles.externalLink}>
                                <BiLinkExternal style={{ size: '90px'}}/>
                            </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Projects;