import styles from '../styles/Projects.module.css'
import Image from 'next/image';
import img1 from '../public/img1.png'
import img2 from '../public/img2.png'
import img3 from '../public/img3.png'
import { SiGithub } from 'react-icons/si'

const Projects = () => {
    return (
        <div className={styles.container}>
            <h2>My Projects</h2>
            <a id='projectLink'></a>
            <div style={{ width: '100%'}}>
                <div className={styles.projectContent}>
                    <div className={styles.project}>
                        <div>
                            <h4>Mexican Restaurant Site</h4>
                            <p>My Restaurant site where users can add porducts to a cart.
                                Utilizing nextjs/react, mongodb, and aws to create a functioning Website.
                            </p>
                            <div>
                                <a href='https://github.com/tielorT/mexican-restaurant_site' target='_blank' rel="noreferrer">
                                    <SiGithub className={styles.iconStyle} style={{ color: '#3E7D80'}} size='30px'/></a>
                            </div>
                        </div>
                        <div style={{ position: 'relative'}}>
                            <a href='https://mexican-restaurant-site.vercel.app/' target='_blank' rel="noreferrer"><Image  className={styles.img} src={img1} 
                                                                                   width={400} height={300} alt='img'/></a>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div>
                            <h4>Favourite Sweets Website</h4>
                            <p>A Website i thought of to showcase my front-end abilities while 
                               showing you my Favourite sweets to eat! project
                               uses React/Nextjs bootstrap, and html/css.  </p>
                            <div>
                                <a href='https://github.com/tielorT/baking_site' target='_blank' rel="noreferrer">
                                    <SiGithub className={styles.iconStyle} style={{ color: '#3E7D80'}} size='30px'/></a>
                            </div>   
                        </div>
                        <div style={{ position: 'relative'}}>
                        <a href='https://baking-site-rho.vercel.app/' target='_blank' rel="noreferrer"><Image className={styles.img} src={img2} 
                                                                             width={400} height={300} alt='img'/></a>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <div>
                            <h4>Grill House Website</h4>
                            <p>A Website template that inspired me to code it from scratch to see if could. Safe to
                                say mission accomplished. Used React/Nextjs to create this website </p>
                            <div>
                                <a href='https://github.com/tielorT/grill_houseRestaurant' target='_blank' rel="noreferrer">
                                    <SiGithub className={styles.iconStyle} style={{ color: '#3E7D80'}} size='30px'/></a>
                            </div>   
                        </div>
                        <div style={{ position: 'relative'}}>
                        <a href='https://grill-house-restaurant.vercel.app/' target='_blank' rel="noreferrer"><Image className={styles.img} src={img3} 
                                                                             width={400} height={300} alt='img'/></a>
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