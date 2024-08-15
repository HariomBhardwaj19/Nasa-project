export default function SideBar(props) {
    const { handleToggleModal } = props;
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">

                <h2>The Brutal Martian Landscape </h2>
                <div>
                    <p>description</p>
                    <p>Mars has long been a focal point of space exploration due to its potential for future human colonization and its similarities to Earth. Various missions have been launched to explore the Red Planet, each contributing valuable data about its atmosphere, surface, and potential for life.

                        One of the most significant ongoing projects is NASA's Curiosity rover, which has been exploring Mars since 2012. Curiosity's mission is centered on investigating the Gale Crater, where it has uncovered evidence that suggests Mars once had conditions that could have supported microbial life. The rover has provided crucial insights into the planet's climate and geology, particularly through the discovery of ancient water flows and organic molecules. Another groundbreaking mission is NASA's Perseverance rover, which landed on Mars in 2021. Perseverance is tasked with searching for signs of ancient life and collecting rock and soil samples that may be returned to Earth in future missions. Accompanying Perseverance is the Ingenuity helicopter, which made history as the first aircraft to achieve powered flight on another planet.

                        NASA's InSight lander, which touched down on Mars in 2018, has a different focus. Rather than exploring the surface, InSight is designed to study the planet's interior. By using seismology to detect "marsquakes," InSight is helping scientists gain a deeper understanding of Mars' geological activity and internal structure. Mars has also been studied extensively from orbit. The Mars Reconnaissance Orbiter, which has been in operation since 2006, has provided detailed maps of Mars' surface, helping to identify potential landing sites for future missions. Meanwhile, the Mars Odyssey mission, active since 2001, has been analyzing the planet's surface and environment, particularly focusing on radiation levels—a critical factor for future human explorers.

                        International efforts have also contributed to our understanding of Mars. The European Space Agency's ExoMars mission, in collaboration with Roscosmos, aims to search for biosignatures and study the Martian atmosphere. China's Tianwen-1 mission, which includes an orbiter, lander, and rover (Zhurong), represents a significant step in China's planetary exploration, focusing on Mars' surface geology and internal structure.

                        The surface of Mars presents a harsh and challenging environment. It is cold, dry, and dusty, with a diverse array of geological features. Mars hosts the largest volcano in the solar system, Olympus Mons, which stands at an incredible height of about 13.6 miles (22 km). The planet also has vast canyon systems, such as Valles Marineris, which stretches over 2,500 miles (4,000 km), making it far larger than Earth's Grand Canyon. Impact craters are another prominent feature, with many scattered across the Martian landscape, including Gale Crater, the site of the Curiosity rover's explorations.

                        The Martian surface is covered in iron oxide, commonly known as rust, which gives the planet its characteristic red color. The soil on Mars is primarily composed of fine dust and sand, with volcanic rocks and minerals like basalt also present. Sedimentary layers in the rocks indicate that Mars once had liquid water, which could have formed rivers, lakes, and possibly even oceans. While Mars is now a dry planet, evidence suggests that water still exists in the form of ice, particularly at the polar ice caps and beneath the surface.

                        Mars experiences extreme temperatures, with highs reaching around 70°F (20°C) at the equator during summer, and lows plummeting to about -195°F (-125°C) at the poles during winter. The planet's thin atmosphere, composed mostly of carbon dioxide, allows for rapid temperature changes between day and night. This thin atmosphere also contributes to the planet's massive dust storms, which can engulf the entire planet and last for weeks or months. These dust storms are a significant challenge for solar-powered missions and demonstrate the unpredictable and harsh conditions that any future human explorers `will need to `overcome.</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}