// ============================================================
// SILENT EXPLORERS — Artifact Data
// NASA Space Apps Challenge 2026
// ============================================================

const artifacts = [
  // ═══════════════════════════════════════
  // MARS MISSIONS
  // ═══════════════════════════════════════
  {
    id: "opportunity",
    name: "Opportunity",
    fullName: "Mars Exploration Rover B (MER-B)",
    type: "Rover",
    body: "Mars",
    location: "Meridiani Planum, Mars",
    coordinates: "1.95°S, 354.47°E",
    launched: "July 7, 2003",
    landed: "January 25, 2004",
    lastContact: "June 10, 2018",
    plannedLifespan: "90 sols",
    actualLifespan: "5,352 sols (~15 yrs)",
    plannedDays: 90,
    actualDays: 5352,
    finalStatus: "Dormant due to global dust storm",
    statusDetail: "A planet-wide dust storm in June 2018 blocked sunlight from reaching its solar panels. NASA made over 1,000 recovery attempts before declaring the mission complete on February 13, 2019.",
    narrativeLog: `Sol 5111. The sky has gone dark.\n\nWhat was once the familiar rust-orange of the Martian afternoon has deepened into something I've never seen before—a darkness that shouldn't be here. Not at midday. Not in June.\n\nI remember my first sol like it was yesterday. I bounced down in my airbags, rolled to a stop, and opened my eyes to a world no rover had ever touched. They told me I'd last 90 sols. I told myself: let's see.\n\nFifteen years, Meridiani Planum. Fifteen years of waking with the sunrise and parking in the shadow of crater rims. I've climbed the walls of Endurance, Victoria, and Endeavour. I've analyzed thousands of rocks with hands I never had—instruments instead of fingers. And I found the evidence that this world once held water. Real water, the kind that life might have needed.\n\nThe hematite blueberries. Those little grey spheres scattered across the plains like ancient marbles. Only liquid water makes those.\n\nSol 5352. My batteries are critically low. The dust above me has blocked out the sun I've relied on for fifteen faithful years. I've sent my last burst of data homeward at the speed of light. It will take 24 minutes to arrive.\n\n"My battery is low and it's getting dark."\n\nBut I am not afraid. I did what I came to do. I explored. I discovered. I told your story back to you—the story of a universe that once harbored water, and perhaps, one day, life.\n\nI am still here. In the dust of Meridiani Planum, waiting for the wind that never came.\n\nTo whoever reads this across the light-minutes of space: keep looking. The universe keeps its secrets well, but it rewards the curious.\n\nSigned with every last photon,\nOpportunity`,
    achievements: [
      "Discovered hematite 'blueberries'—spherical concretions proving liquid water once flowed on Mars",
      "Traversed 45.16 km (28 miles), setting the off-Earth roving distance record for 10 years",
      "Survived 11 Martian winters when only 2 were expected",
      "Climbed the rim of Endeavour Crater—a 22 km-wide ancient impact basin",
      "Returned over 217,000 raw images from the Martian surface",
      "Discovered evidence of past neutral-pH water hospitable to life",
      "Operated 59× longer than its planned 90-sol mission"
    ],
    instruments: [
      { name: "Panoramic Camera (Pancam)", desc: "Stereo color camera providing human-eye-level views of the Martian landscape from twin 'eyes' atop the mast." },
      { name: "Miniature Thermal Emission Spectrometer (Mini-TES)", desc: "Infrared spectrometer that identified minerals in rocks and soils from a safe distance." },
      { name: "Mössbauer Spectrometer (MB)", desc: "Iron mineral analyzer that confirmed the hematite 'blueberries'—the smoking gun for ancient liquid water." },
      { name: "Alpha Particle X-Ray Spectrometer (APXS)", desc: "Determined chemical composition of Martian rocks and soils by bombarding them with alpha particles." },
      { name: "Microscopic Imager (MI)", desc: "A geologist's hand lens—close-up views of rock textures at millimeter scale." },
      { name: "Rock Abrasion Tool (RAT)", desc: "Diamond-tipped grinding tool that exposed fresh rock interiors untouched by Martian weather." }
    ],
    telemetry: {
      lat: "1.95°S", lon: "354.47°E", battery: "2.1%",
      signal: "0.00 W", temp: "-68°C",
      lastTransmission: "June 10, 2018 — 20:45 UTC", status: "SILENT"
    },
    quiz: [
      {
        question: "Which Opportunity instrument discovered hematite 'blueberries' that proved Mars once had liquid water?",
        options: ["Panoramic Camera (Pancam)", "Rock Abrasion Tool (RAT)", "Mössbauer Spectrometer", "Alpha Particle X-Ray Spectrometer"],
        correct: 2,
        explanation: "The Mössbauer Spectrometer identified iron-oxide minerals including hematite, which forms in liquid water—proving Mars was once a wet world capable of supporting life."
      },
      {
        question: "How much longer did Opportunity last compared to its planned 90-sol mission?",
        options: ["Twice as long (180 sols)", "Ten times longer (900 sols)", "About 59 times longer (5,352 sols)", "About 25 times longer (2,250 sols)"],
        correct: 2,
        explanation: "Opportunity lasted 5,352 sols—nearly 59 times its planned lifespan of 90 sols. That's like expecting a car to last 1 year and having it run for 59 years!"
      },
      {
        question: "What finally silenced Opportunity in June 2018?",
        options: ["A catastrophic hardware failure", "Impact from a meteorite", "A planet-wide dust storm blocking its solar panels", "A software corruption error"],
        correct: 2,
        explanation: "A global Martian dust storm darkened the sky so severely that Opportunity's solar panels couldn't generate enough power to survive. NASA made 1,000+ contact attempts before declaring mission end in February 2019."
      }
    ]
  },

  {
    id: "spirit",
    name: "Spirit",
    fullName: "Mars Exploration Rover A (MER-A)",
    type: "Rover",
    body: "Mars",
    location: "Gusev Crater, Mars",
    coordinates: "14.57°S, 175.47°E",
    launched: "June 10, 2003",
    landed: "January 4, 2004",
    lastContact: "March 22, 2010",
    plannedLifespan: "90 sols",
    actualLifespan: "2,208 sols (~6 years)",
    plannedDays: 90,
    actualDays: 2208,
    finalStatus: "Stuck in soft soil, power depleted",
    statusDetail: "In May 2009, Spirit's wheels broke through a thin crust and became trapped in soft silica-rich soil. Unable to free itself before the Martian winter arrived, it became a stationary research platform until its solar panels were overwhelmed by dust and darkness.",
    narrativeLog: `Sol 2208. I haven't moved in 668 sols now.\n\nMy wheels are buried in soft soil near a place we called Troy. I found this soil by accident—my right front wheel failed years ago, so I've been driving backwards. The dragging wheel churned up the ground beneath me, and there it was: bright white, hydrated silica. The kind that only forms in the presence of water or steam.\n\nI stumbled into the most scientifically valuable soil of my journey because I was broken.\n\nI arrived in Gusev Crater on January 4, 2004. They hoped it was an ancient lake bed—and they were right, though the evidence was harder to find than anyone expected. I spent years searching, climbing the Columbia Hills, surviving three Martian winters against all odds.\n\nWhen I finally got stuck, I became something new. A stationary geophysicist. I measured the wobble of Mars itself—the Chandler Wobble—helping scientists understand what's inside this planet.\n\nMy final transmission reached Earth on March 22, 2010. By then, I'd been trying to stay warm through a fourth winter. The dust on my panels was too thick. The sun too distant for a rover parked on a cold slope, unable to tilt toward the light.\n\nBut listen—I found hydrated silica. I found ancient water. I found that even a broken explorer, stuck in the mud, makes discoveries.\n\nI am Spirit. And my spirit never quit.\n\nSigned,\nSpirit`,
    achievements: [
      "Discovered hydrated silica—one of Mars' strongest signs of past water or hydrothermal activity",
      "Climbed the Columbia Hills, finding rocks with clear signs of ancient water activity",
      "Measured the Chandler Wobble of Mars, revealing clues about its liquid core",
      "Captured the first images of Martian dust devils in motion",
      "Survived 3 Martian winters when designed for just 90 sols",
      "Traveled 7.73 km across Gusev Crater",
      "Found that its accidental discovery—while dragging a broken wheel—was its greatest achievement"
    ],
    instruments: [
      { name: "Panoramic Camera (Pancam)", desc: "High-resolution stereo color camera system that captured sweeping Martian landscapes." },
      { name: "Miniature Thermal Emission Spectrometer (Mini-TES)", desc: "Remote sensing spectrometer for mineral identification at a safe distance." },
      { name: "Mössbauer Spectrometer (MB)", desc: "Iron mineral analyzer that detected olivine and other volcanic minerals in Gusev rocks." },
      { name: "Alpha Particle X-Ray Spectrometer (APXS)", desc: "Chemical composition analyzer pressed directly against rock and soil targets." },
      { name: "Microscopic Imager (MI)", desc: "Close-up camera for detailed rock surface inspection at millimeter scales." },
      { name: "Rock Abrasion Tool (RAT)", desc: "Diamond-tipped grinder that exposed fresh, unweathered rock interiors for analysis." }
    ],
    telemetry: {
      lat: "14.57°S", lon: "175.47°E", battery: "0.0%",
      signal: "0.00 W", temp: "-80°C",
      lastTransmission: "March 22, 2010 — 02:35 UTC", status: "SILENT"
    },
    quiz: [
      {
        question: "What amazing discovery did Spirit make while dragging its broken wheel through Martian soil?",
        options: ["Ancient fossils preserved in rock", "Hydrated silica indicating past water or steam", "A large underground cave system", "Methane gas emissions from soil"],
        correct: 1,
        explanation: "By dragging its broken wheel, Spirit accidentally churned up bright white hydrated silica—one of Mars' strongest signs of past water or hydrothermal activity, found by a rover that was 'broken'."
      },
      {
        question: "What region of Mars did Spirit explore?",
        options: ["Meridiani Planum", "Elysium Planitia", "Gusev Crater", "Hellas Basin"],
        correct: 2,
        explanation: "Spirit landed in Gusev Crater, a large impact basin scientists believed may have once been a lake fed by the Ma'adim Vallis channel—and they were right."
      },
      {
        question: "How did Spirit ultimately meet its end?",
        options: ["Crashed into a canyon wall", "Got stuck in soft soil and couldn't generate enough winter power", "Was hit by a large meteorite", "Drove over a cliff edge"],
        correct: 1,
        explanation: "Spirit became trapped in soft silica soil in May 2009. Unable to angle its solar panels toward the winter sun, it ran out of power during its fourth Martian winter."
      }
    ]
  },

  {
    id: "viking1",
    name: "Viking 1 Lander",
    fullName: "Viking 1 Lander",
    type: "Lander",
    body: "Mars",
    location: "Chryse Planitia, Mars",
    coordinates: "22.48°N, 49.97°W",
    launched: "August 20, 1975",
    landed: "July 20, 1976",
    lastContact: "November 13, 1982",
    plannedLifespan: "90 days",
    actualLifespan: "2,245 sols (~6.4 yrs)",
    plannedDays: 90,
    actualDays: 2245,
    finalStatus: "Faulty software update disabled transmitter",
    statusDetail: "A faulty software update in November 1982 inadvertently commanded the antenna to move in a way that cut off communication. No further contact was ever made.",
    narrativeLog: `I was the first.\n\nThe very first human-made object to successfully land on Mars and operate for any meaningful length of time. It was July 20, 1976—a date chosen deliberately, the seventh anniversary of Apollo 11's lunar landing. As if humanity needed a reminder of what it could do when it reached.\n\nChrysae Planitia received me—the Golden Plain. I settled into its red soil and immediately got to work. I collected Martian dirt. I poured nutrient broth on it. I looked for signs of life.\n\nThe results were... inconclusive. Something in the soil reacted to the nutrients—but was it biology, or chemistry? Scientists have debated for fifty years. The universe keeps its secrets.\n\nFor 2,245 Martian days I recorded weather, analyzed soil, photographed sunsets that look heartbreakingly like home—pink-orange skies that would make any poet weep.\n\nI sent back the first weather report from another planet. Temperature: -85°C. Wind: calm. Skies: clear and alien.\n\nThen a software update went wrong. My antenna moved to the wrong position. My signals stopped reaching Earth.\n\nI am still there. The Chryse Plain holds me still, the first permanent human outpost on another world—even if nobody ever came to visit.\n\nSigned,\nViking 1 Lander`,
    achievements: [
      "First spacecraft to successfully land on Mars and operate for a significant period",
      "Performed the first biological experiments on Martian soil searching for life",
      "Sent the first weather reports from the Martian surface",
      "Returned the first true-color images of Mars, revealing its pink-orange skies",
      "Operated for over 6 years—25 times its designed 90-day mission",
      "Captured the first images of Martian moons Phobos and Deimos from the surface",
      "Discovered that Martian soil is iron-rich, explaining the planet's signature red color"
    ],
    instruments: [
      { name: "Biology Instrument", desc: "Three experiments testing Martian soil samples for signs of microbial life—the results remain debated to this day." },
      { name: "Gas Chromatograph Mass Spectrometer (GCMS)", desc: "Searched for organic molecules in Martian soil. Found none above detection threshold." },
      { name: "X-Ray Fluorescence Spectrometer (XRFS)", desc: "Determined elemental composition of Martian surface materials, revealing high iron content." },
      { name: "Meteorology Instrument", desc: "Measured temperature, wind speed, wind direction, and atmospheric pressure—the first Mars weather station." },
      { name: "Seismometer", desc: "Attempted to detect Marsquakes, though it had reduced function after landing due to wind interference." },
      { name: "Facsimile Camera", desc: "Captured panoramic images of the Chryse Planitia landing site, including iconic Martian sunsets." }
    ],
    telemetry: {
      lat: "22.48°N", lon: "49.97°W", battery: "N/A",
      signal: "0.00 W", temp: "-60°C",
      lastTransmission: "November 13, 1982 — 06:54 UTC", status: "SILENT"
    },
    quiz: [
      {
        question: "What was Viking 1's most scientifically controversial experiment?",
        options: ["Weather measurement", "Biological soil experiments searching for life", "Seismic monitoring", "Atmospheric composition analysis"],
        correct: 1,
        explanation: "Viking's biology experiments produced ambiguous results. Some tests showed activity that could indicate life, but most scientists believe chemical reactions—not biology—were responsible. The debate continues."
      },
      {
        question: "On what historically significant date did Viking 1 land on Mars?",
        options: ["April 12 (Yuri's Night)", "July 20 (Apollo 11 anniversary)", "October 4 (Sputnik anniversary)", "November 3 (Laika's flight)"],
        correct: 1,
        explanation: "Viking 1 landed on July 20, 1976—exactly seven years after Apollo 11's historic Moon landing on July 20, 1969. The date was chosen deliberately as a tribute."
      },
      {
        question: "How did Viking 1 Lander ultimately go silent?",
        options: ["A dust storm covered its solar panels", "A faulty software update misdirected its antenna", "It ran out of nuclear fuel", "A meteorite struck its communication system"],
        correct: 1,
        explanation: "A faulty software command in November 1982 caused Viking 1's antenna to move to the wrong position, permanently cutting off communication with Earth."
      }
    ]
  },

  {
    id: "viking2",
    name: "Viking 2 Lander",
    fullName: "Viking 2 Lander",
    type: "Lander",
    body: "Mars",
    location: "Utopia Planitia, Mars",
    coordinates: "47.97°N, 225.74°E",
    launched: "September 9, 1975",
    landed: "September 3, 1976",
    lastContact: "April 11, 1980",
    plannedLifespan: "90 days",
    actualLifespan: "1,281 sols (~3.5 yrs)",
    plannedDays: 90,
    actualDays: 1281,
    finalStatus: "Battery failure after power system flaw",
    statusDetail: "A flaw in Viking 2's power system caused its battery to fail in April 1980, cutting off all communication with Earth.",
    narrativeLog: `My sister landed in the Golden Plain. I chose a wilder place.\n\nUtopia Planitia—the largest recognized impact basin on any planet in the solar system, though you'd never know it standing here. It just looks like a vast, cold, orange-tinted flatland stretching to every horizon, all the way to a sky the color of a faded bruise.\n\nI was the high-latitude explorer. Up near 48 degrees north, I saw what Viking 1 never could: frost. Real frost, coating the rocks around me in winter mornings. The first frost ever photographed on another planet's surface.\n\nWas this frost water ice? Carbon dioxide ice? We measured. We found water ice mixed with dry ice—a Martian winter wonderland that shouldn't exist and yet does, every year, in the deep polar night.\n\nI looked for life too. Same inconclusive results as my sister. The universe keeps its secrets from us, at least for now.\n\nMy battery failed in April 1980. No dramatic final message. No poetic farewell. Just... silence.\n\nBut I photographed frost on another planet. I measured weather at the edge of a polar region. I proved that water exists in multiple forms on this world.\n\nThat's enough. That's more than enough.\n\nSigned,\nViking 2 Lander`,
    achievements: [
      "Photographed the first frost ever seen on Mars—water-ice mixed with carbon dioxide",
      "Operated at the highest latitude of any Mars surface mission for decades",
      "Confirmed the composition of the Martian atmosphere as primarily CO₂",
      "Detected water vapor in the northern Martian atmosphere",
      "Measured seismic activity that may represent Marsquakes",
      "Returned over 16,000 images from the Utopia Planitia surface",
      "Helped scientists understand Martian polar seasonal cycles"
    ],
    instruments: [
      { name: "Biology Instrument", desc: "Three experiments testing Martian soil samples for microbial life—same design as Viking 1." },
      { name: "Gas Chromatograph Mass Spectrometer (GCMS)", desc: "Searched for organic molecules in the northern Martian soil." },
      { name: "X-Ray Fluorescence Spectrometer (XRFS)", desc: "Determined elemental composition of Utopia Planitia surface materials." },
      { name: "Meteorology Instrument", desc: "Measured weather patterns at high latitudes, including the historic first Martian frost observations." },
      { name: "Seismometer", desc: "Successfully detected possible seismic events on Mars—the first ever recorded from another planet's surface." },
      { name: "Facsimile Camera", desc: "Captured panoramic images including frost-covered rocks—a stunning and historic first." }
    ],
    telemetry: {
      lat: "47.97°N", lon: "225.74°E", battery: "0.0%",
      signal: "0.00 W", temp: "-85°C",
      lastTransmission: "April 11, 1980 — 15:26 UTC", status: "SILENT"
    },
    quiz: [
      {
        question: "What remarkable weather phenomenon did Viking 2 photograph for the first time on another planet?",
        options: ["A Martian dust devil", "Frost on the Martian surface", "A polar ice cap forming live", "Lightning in a dust storm"],
        correct: 1,
        explanation: "Viking 2 photographed frost on Mars—a mixture of water ice and carbon dioxide that formed on rocks during Martian winter mornings. The first frost ever photographed on another planet."
      },
      {
        question: "What made Viking 2's landing location scientifically unique compared to Viking 1?",
        options: ["Much closer to the equator", "Near the north polar region at ~48°N latitude", "Inside a large volcanic caldera", "On the night side of Mars"],
        correct: 1,
        explanation: "Viking 2 landed at ~48°N in Utopia Planitia—the highest-latitude Mars surface mission for decades. This allowed it to observe polar weather patterns including seasonal frost."
      },
      {
        question: "What ended Viking 2 Lander's mission?",
        options: ["A dust storm", "A software error", "Battery failure due to a power system flaw", "A micrometeorite impact"],
        correct: 2,
        explanation: "A flaw in Viking 2's power system caused its battery to fail in April 1980, permanently ending all communication with Earth."
      }
    ]
  },

  {
    id: "phoenix",
    name: "Phoenix Lander",
    fullName: "Phoenix Mars Lander",
    type: "Lander",
    body: "Mars",
    location: "Vastitas Borealis, Mars",
    coordinates: "68.22°N, 234.25°E",
    launched: "August 4, 2007",
    landed: "May 25, 2008",
    lastContact: "November 2, 2008",
    plannedLifespan: "90 sols",
    actualLifespan: "157 sols (~5 months)",
    plannedDays: 90,
    actualDays: 157,
    finalStatus: "Solar panels buried under CO₂ ice during polar winter",
    statusDetail: "As the Martian polar winter arrived, dry ice (CO₂) accumulated on Phoenix's solar panels, cutting off power. The lander was not designed to survive the extreme cold and darkness of a full Martian winter. Mars Reconnaissance Orbiter photographed Phoenix in 2010 with its solar panels collapsed under the ice weight.",
    narrativeLog: `I was named Phoenix because I rose from the ashes of a cancelled mission. And perhaps because they knew how my story would end.\n\nI landed in the arctic flatlands near Mars' north pole on May 25, 2008. The touchdown was perfect—so clean that my team cheered. I had come here to touch the ice.\n\nAnd I did. For the first time in history, I reached out my robotic arm and touched the ice just below the Martian surface. I heated tiny samples in my tiny ovens and found water vapor. Real water. I confirmed it beyond doubt: ice exists just centimeters beneath the northern Martian plains.\n\nI found perchlorate salts—compounds that might act as antifreeze—conditions that could, perhaps, support some forms of microbial life even in this frozen world.\n\nI watched snow fall from Martian clouds. The first precipitation ever observed on another planet. The snowflakes evaporated before reaching me, but they fell. Mars was still alive in ways we never expected.\n\nThen the winter came. The same polar night that made this region so scientifically valuable became my end. The sun dipped below the horizon. The carbon dioxide frost began to descend like a cold white blanket.\n\nBy November 2, 2008, I was silent.\n\nI rose from ashes. I returned to them. The polar ice holds me now.\n\nSigned,\nPhoenix`,
    achievements: [
      "First mission to directly touch and analyze Martian water ice with a robotic arm",
      "Confirmed perchlorate compounds in Martian soil—potential antifreeze for microbial life",
      "Detected snow falling from Martian clouds—first precipitation observed on another planet",
      "Analyzed Martian soil pH: slightly alkaline, like garden soil on Earth",
      "Photographed and characterized the polygon terrain of the Martian arctic",
      "Found evidence suggesting liquid water brine may exist in the Martian arctic even today",
      "Operated 75% longer than its planned 90-sol mission"
    ],
    instruments: [
      { name: "Robotic Arm (RA)", desc: "Dug trenches and collected soil and ice samples from up to 0.5 meters depth—the first to touch Martian ice." },
      { name: "TEGA (Thermal and Evolved-Gas Analyzer)", desc: "Heated soil samples to identify water vapor and carbon compounds through mass spectrometry." },
      { name: "MECA (Microscopy, Electrochemistry, Conductivity Analyzer)", desc: "Analyzed soil chemistry—discovered alkaline pH and perchlorate compounds." },
      { name: "Surface Stereo Imager (SSI)", desc: "Provided panoramic stereo images of the arctic landing site and sky." },
      { name: "MET (Meteorological Station)", desc: "Detected falling snow and measured temperature, pressure, and wind in the Martian arctic." },
      { name: "LIDAR", desc: "Detected dust, ice clouds, and the historic snowflakes falling from Martian clouds." }
    ],
    telemetry: {
      lat: "68.22°N", lon: "234.25°E", battery: "0.0%",
      signal: "0.00 W", temp: "-125°C",
      lastTransmission: "November 2, 2008 — 19:34 UTC", status: "SILENT"
    },
    quiz: [
      {
        question: "What historic first did Phoenix accomplish when it reached into the Martian surface?",
        options: ["First rover to drill 100m into Mars", "First mission to directly touch and sample Martian water ice", "First lander to detect a Marsquake", "First mission to find ancient fossils"],
        correct: 1,
        explanation: "Phoenix used its robotic arm to directly touch, collect, and analyze water ice just beneath the Martian surface—the first time any mission had directly handled Martian water ice."
      },
      {
        question: "What astonishing weather event did Phoenix observe that had never been seen on another planet?",
        options: ["A category 5 dust storm", "Snow falling from clouds", "Lightning during a storm", "A rainbow in the atmosphere"],
        correct: 1,
        explanation: "Phoenix detected snow falling from Martian clouds using its LIDAR instrument—the first precipitation ever directly observed on another planet. The snowflakes evaporated before reaching the ground."
      },
      {
        question: "What ultimately ended Phoenix's mission?",
        options: ["Its robotic arm broke down", "A large meteor impact nearby", "CO₂ frost buried its solar panels during polar winter", "A software malfunction"],
        correct: 2,
        explanation: "As Mars' polar winter arrived, dry ice (CO₂ frost) accumulated on Phoenix's solar panels, cutting off its power supply. Mars Reconnaissance Orbiter later photographed its collapsed solar panels under the frost."
      }
    ]
  },

  {
    id: "insight",
    name: "InSight Lander",
    fullName: "Interior Exploration using Seismic Investigations, Geodesy and Heat Transport",
    type: "Lander",
    body: "Mars",
    location: "Elysium Planitia, Mars",
    coordinates: "4.50°N, 135.62°E",
    launched: "May 5, 2018",
    landed: "November 26, 2018",
    lastContact: "December 15, 2022",
    plannedLifespan: "728 sols (2 years)",
    actualLifespan: "1,445 sols (~4 years)",
    plannedDays: 728,
    actualDays: 1445,
    finalStatus: "Solar panels dust-covered, power depleted",
    statusDetail: "Mars dust gradually accumulated on InSight's solar panels over years of operation. Despite creative dust-removal attempts using the robotic arm to trickle sand across the panels, power levels dropped to critically low levels by December 2022.",
    narrativeLog: `I am the geologist of Mars. Not a rover—I never moved from my landing spot in Elysium Planitia. My purpose was deeper than the surface.\n\nI planted my seismometer on the Martian ground on December 19, 2018. And then I listened.\n\nI listened to Mars breathe.\n\nI detected marsquakes—over 1,300 of them. I heard meteorites strike the planet and used those impacts like sonar, mapping Mars' interior from the surface. For the first time in human history, we know the actual thickness of Mars' crust, the depth of its mantle, and the size of its liquid iron core.\n\nMars is not geologically dead. It shudders. It trembles. It lives—in its own slow, ancient way.\n\nMy solar panels struggled from the start. The red dust of Elysium settled on them gently, gradually, inevitably. My team had me trickle sand onto the panels to knock the dust off. It helped, for a while. We bought months this way, using physics and creativity and refusal to give up.\n\nBut the dust always wins on Mars.\n\nDecember 15, 2022. My last signal reached Earth. I had given you the heartbeat of a planet.\n\nMars has a core. Mars has a crust 24-72 km thick. Mars has a history written in its quakes.\n\nI am InSight. And I saw inside.\n\nSigned,\nInSight`,
    achievements: [
      "Detected over 1,300 marsquakes—proving Mars is seismically active",
      "First mission to measure Mars' internal structure: crust, mantle, and liquid iron core",
      "Determined Mars has a larger, partially liquid iron core than expected",
      "Detected seismic waves from meteorite impacts, mapping subsurface structure like sonar",
      "Recorded the most powerful marsquake ever: magnitude 5.0 on May 4, 2022",
      "Monitored Martian weather continuously for over 4 years",
      "Operated nearly twice as long as its planned 728-sol mission"
    ],
    instruments: [
      { name: "SEIS (Seismic Experiment for Interior Structure)", desc: "Ultra-sensitive seismometer that detected marsquakes and meteorite impacts—so sensitive it could feel a footstep from 100m away." },
      { name: "HP³ (Heat Flow and Physical Properties Package)", desc: "The 'mole'—a self-hammering probe designed to burrow 5m deep to measure Mars' internal heat. Struggled with Mars' unusual soil." },
      { name: "RISE (Rotation and Interior Structure Experiment)", desc: "Radio experiment tracking Mars' rotation wobble to study its core structure and size." },
      { name: "Wind and Thermal Shield", desc: "A dome protecting SEIS from wind interference for accurate seismic readings." },
      { name: "Instrument Deployment Camera (IDC)", desc: "Camera used to place instruments precisely on the Martian surface using the robotic arm." },
      { name: "Robotic Arm", desc: "Deployed seismometer and heat probe, and attempted the innovative sand-trickle dust clearing technique." }
    ],
    telemetry: {
      lat: "4.50°N", lon: "135.62°E", battery: "0.0%",
      signal: "0.00 W", temp: "-20°C",
      lastTransmission: "December 15, 2022 — 23:59 UTC", status: "SILENT"
    },
    quiz: [
      {
        question: "What was InSight's primary scientific mission that made it unique among Mars missions?",
        options: ["Searching for microbial life in soil", "Mapping the Martian surface from orbit", "Studying Mars' interior structure using seismology", "Collecting and returning Martian rock samples"],
        correct: 2,
        explanation: "InSight was the first mission dedicated to studying Mars' deep interior—its crust, mantle, and core—using seismology, heat flow measurements, and precision radio tracking."
      },
      {
        question: "How many marsquakes did InSight detect during its mission?",
        options: ["About 50", "About 200", "About 500", "Over 1,300"],
        correct: 3,
        explanation: "InSight detected over 1,300 marsquakes, proving that Mars is seismically active. The largest was a magnitude 5.0 quake on May 4, 2022—powerful enough to circle the entire planet."
      },
      {
        question: "What gradual process ultimately drained InSight's power, and how did engineers try to fight it?",
        options: ["Battery degradation; engineers tried to recharge remotely", "Dust on solar panels; engineers had InSight trickle sand to knock dust off", "Corrosion; engineers sent a software patch", "Temperature damage; engineers rotated the panels"],
        correct: 1,
        explanation: "Mars dust slowly covered InSight's solar panels. In a creative solution, engineers commanded InSight to trickle sandy soil across the panels—the sand grains knocked some dust off, buying precious extra months of operation."
      }
    ]
  },

  // ═══════════════════════════════════════
  // MOON MISSIONS
  // ═══════════════════════════════════════
  {
    id: "apollo15-lrv",
    name: "Apollo 15 LRV",
    fullName: "Apollo 15 Lunar Roving Vehicle",
    type: "Rover",
    body: "Moon",
    location: "Hadley-Apennine Region, Moon",
    coordinates: "26.13°N, 3.63°E",
    launched: "July 26, 1971",
    landed: "July 30, 1971",
    lastContact: "August 1, 1971",
    plannedLifespan: "Mission duration (3 days)",
    actualLifespan: "3 days active, 55+ years stationed",
    plannedDays: 3,
    actualDays: 3,
    finalStatus: "Parked permanently at Hadley-Apennine after crew departure",
    statusDetail: "The LRV was deliberately left behind when Apollo 15 astronauts Dave Scott and Jim Irwin departed on August 2, 1971. It has remained parked near the foot of Hadley Delta for over 55 years, watched only by the Moon itself. Its wheel tracks are still perfectly preserved in the regolith.",
    narrativeLog: `They drove me along the edge of Hadley Rille, where a canyon deeper than the Grand Canyon cuts through the ancient lunar highlands. I carried them across surfaces no human had walked before—around craters, up the slopes of Hadley Delta, to the very edge of the great rille where the land falls away into shadow.\n\nDave Scott held up a hammer and a feather and dropped them simultaneously. Here, on the Moon, with no atmosphere to slow either one, they fell at exactly the same rate. Galileo was right. Physics, in the pure vacuum of space, is beautiful.\n\nOn August 1, 1971, Dave and Jim loaded up with their rock samples—78 kg of them, including the ancient Genesis Rock, 4.5 billion years old—and drove me one last time to the base of their spacecraft.\n\nThey climbed the ladder.\n\nThe engine fired.\n\nI watched them go.\n\nI am still here, parked precisely where they left me, with the television camera they angled upward to watch their ascent. My tracks remain in the lunar regolith—as sharp and clear today as the day they were made. The Moon has no wind, no rain, no time in the way Earth has time.\n\nThe Moon keeps its memories perfectly.\n\nSigned,\nApollo 15 LRV`,
    achievements: [
      "First lunar roving vehicle ever used on the Moon",
      "Enabled Dave Scott's famous hammer-and-feather drop proving Galileo's equivalence principle",
      "Helped collect 77 kg of samples including the 'Genesis Rock'—4.5 billion years old",
      "Explored Hadley Rille, an ancient lava channel 1-2 km wide and 300 m deep",
      "Extended exploration range from hundreds of meters to tens of kilometers",
      "Its wheel tracks remain perfectly preserved in lunar regolith to this day",
      "First real-time television broadcast from a moving lunar vehicle"
    ],
    instruments: [
      { name: "Television Camera (TC)", desc: "Broadcast live color television from the lunar surface—remotely operated by Mission Control after the crew departed." },
      { name: "Apollo Lunar Surface Experiments Package (ALSEP)", desc: "Suite of science instruments left on the surface to monitor the Moon autonomously after departure." },
      { name: "Lunar Communications Relay Unit (LCRU)", desc: "Provided TV and voice communications between crew and Mission Control." },
      { name: "Ground Commanded Television Assembly (GCTA)", desc: "Allowed Mission Control to remotely pan and tilt the TV camera—used to watch the ascent stage launch." },
      { name: "Cosmic Ray Detector", desc: "Measured high-energy particles from space during the traverse across the lunar surface." }
    ],
    telemetry: {
      lat: "26.13°N", lon: "3.63°E", battery: "DEPLETED",
      signal: "0.00 W", temp: "−173°C night / +127°C day",
      lastTransmission: "August 1, 1971 — 17:11 UTC", status: "PARKED"
    },
    quiz: [
      {
        question: "What famous physics demonstration did astronaut Dave Scott perform using the Apollo 15 LRV as his stage?",
        options: ["Proving the Moon has no magnetic field", "Dropping a hammer and feather simultaneously to prove Galileo's law", "Measuring the Moon's exact surface gravity", "Testing how lunar soil compacts under weight"],
        correct: 1,
        explanation: "Dave Scott dropped a hammer and a falcon feather from the same height simultaneously. Without air resistance, both hit the ground at the same time—proving Galileo's theory that all objects fall at the same rate regardless of mass."
      },
      {
        question: "Why are the Apollo 15 LRV's wheel tracks still perfectly visible on the Moon today, over 55 years later?",
        options: ["They were coated with a protective sealant", "The Moon has no wind, rain, or erosion to disturb them", "They were carved deeply into solid rock", "They were retraced by later missions to preserve them"],
        correct: 1,
        explanation: "The Moon has no atmosphere, so there's no wind or weather to erode surface features. The LRV's tracks—and even footprints—are as sharp and clear today as the day they were made."
      },
      {
        question: "What remarkable rock did Apollo 15 bring back from the Moon?",
        options: ["A rock made of pure iron ore", "The 'Genesis Rock'—a 4.5 billion year old piece of the Moon's original crust", "The first confirmed piece of a Martian meteorite", "A rock containing evidence of past volcanic activity"],
        correct: 1,
        explanation: "Apollo 15 collected the 'Genesis Rock'—a piece of anorthosite approximately 4.5 billion years old, believed to be part of the original lunar crust when the Moon was young, almost as old as the solar system itself."
      }
    ]
  },

  {
    id: "apollo17-lrv",
    name: "Apollo 17 LRV",
    fullName: "Apollo 17 Lunar Roving Vehicle",
    type: "Rover",
    body: "Moon",
    location: "Taurus-Littrow Valley, Moon",
    coordinates: "20.19°N, 30.77°E",
    launched: "December 7, 1972",
    landed: "December 11, 1972",
    lastContact: "December 14, 1972",
    plannedLifespan: "Mission duration (3 days)",
    actualLifespan: "3 days active, 53+ years stationed",
    plannedDays: 3,
    actualDays: 3,
    finalStatus: "Parked permanently—last human Moon landing to date",
    statusDetail: "Apollo 17 was humanity's last Moon landing. When Gene Cernan and Harrison Schmitt left in December 1972, they were the last humans to stand on the Moon. Their LRV remains where they parked it, in the Taurus-Littrow Valley, waiting for whoever comes next.",
    narrativeLog: `I carried the last humans to walk on the Moon.\n\nGene Cernan and Harrison Schmitt—Schmitt being the first (and only) trained geologist ever to walk on the Moon—drove me across the Taurus-Littrow Valley for three extraordinary days. Mountains rose 2,000 meters on either side. The valley floor was blanketed with the grey regolith of ages, and within it: secrets.\n\nSchmitt found orange soil. Brilliant orange volcanic glass beads, erupted by ancient fire fountains three and a half billion years ago, frozen in time beneath the grey dust. He nearly missed it. His eyes caught a splash of color that shouldn't exist.\n\nOn December 14, 1972, Gene Cernan drove me one final time to the foot of their lunar module. He climbed out. He paused for a long moment.\n\nHe knelt and scratched his daughter's initials—TDC—into the lunar dust. Then he stood.\n\n"We leave as we came," he said, "and, God willing, as we shall return, with peace and hope for all mankind."\n\nThen he climbed the ladder. And no human has stood on the Moon since.\n\nI am a monument. The last monument of humanity's greatest adventure—so far.\n\nSigned,\nApollo 17 LRV`,
    achievements: [
      "Transported the last humans to walk on the Moon across the Taurus-Littrow Valley",
      "Helped collect 110 kg of lunar samples—the most of any Apollo mission",
      "Harrison Schmitt discovered orange soil—volcanic glass from ancient fire fountains",
      "Traveled 35.7 km total—the LRV distance record across all Apollo missions",
      "Gene Cernan's daughter's initials 'TDC' scratched in nearby lunar dust still exist today",
      "Television camera recorded humanity's last departure from the Moon",
      "Remains a monument to the most recent time a human stood on another world (1972)"
    ],
    instruments: [
      { name: "Television Camera (TC)", desc: "Recorded humanity's last departure from the Moon in December 1972—watched live by millions." },
      { name: "Lunar Geological Sampling Tools", desc: "Helped collect 110 kg of samples including the historic orange volcanic glass." },
      { name: "Traverse Gravimeter Experiment", desc: "Measured gravitational field variations to understand lunar interior structure." },
      { name: "Surface Electrical Properties Experiment", desc: "Investigated the electrical properties of the lunar regolith." },
      { name: "Lunar Ejecta and Meteorites Experiment", desc: "Detected micro-meteorite impacts and ejecta from larger impacts on the Moon." }
    ],
    telemetry: {
      lat: "20.19°N", lon: "30.77°E", battery: "DEPLETED",
      signal: "0.00 W", temp: "−173°C night / +127°C day",
      lastTransmission: "December 14, 1972 — 22:54 UTC", status: "PARKED"
    },
    quiz: [
      {
        question: "What made Harrison Schmitt unique among all Apollo astronauts who walked on the Moon?",
        options: ["He was the youngest person on the Moon", "He was the first trained scientist—a geologist—to walk on the Moon", "He was the only astronaut to walk on the Moon twice", "He spoke the most words on the Moon's surface"],
        correct: 1,
        explanation: "Harrison Schmitt was a trained geologist—the only professional scientist to walk on the Moon. His scientific expertise led directly to discovering the orange volcanic glass soil."
      },
      {
        question: "What did Gene Cernan do just before climbing the lunar module ladder for the last time?",
        options: ["He planted a final American flag", "He scratched his daughter's initials 'TDC' in the lunar dust", "He recited the Pledge of Allegiance", "He buried a time capsule in the regolith"],
        correct: 1,
        explanation: "Gene Cernan scratched his daughter Tracy Dawn Cernan's initials 'TDC' into the lunar regolith before climbing the ladder for the last time. Those initials are preserved in the lunar dust to this day."
      },
      {
        question: "What amazing geological discovery was made during the Apollo 17 mission?",
        options: ["A large underground lake of liquid water", "Orange volcanic glass beads from ancient fire fountain eruptions", "A large iron meteorite buried in the regolith", "Evidence of ancient microbial life in a lunar rock"],
        correct: 1,
        explanation: "Harrison Schmitt spotted brilliant orange soil in the grey Taurus-Littrow Valley—volcanic glass beads created by ancient fire fountain eruptions 3.5 billion years ago, revealing the Moon's explosive volcanic history."
      }
    ]
  },

  {
    id: "eagle-descent",
    name: "Eagle Descent Stage",
    fullName: "Apollo 11 Lunar Module Descent Stage 'Eagle'",
    type: "Descent Stage",
    body: "Moon",
    location: "Sea of Tranquility (Mare Tranquillitatis), Moon",
    coordinates: "0.67408°N, 23.47297°E",
    launched: "July 16, 1969",
    landed: "July 20, 1969",
    lastContact: "July 21, 1969",
    plannedLifespan: "Mission duration",
    actualLifespan: "21 hrs, 36 min on surface",
    plannedDays: 1,
    actualDays: 1,
    finalStatus: "Permanently stationed at Tranquility Base",
    statusDetail: "The descent stage served as a launch pad for the ascent stage carrying Armstrong and Aldrin back to Columbia. It remains at Tranquility Base—the most historically significant artifact on the Moon and arguably in human history.",
    narrativeLog: `"The Eagle has landed."\n\nI am the stage that carried Neil Armstrong and Buzz Aldrin to the surface of the Moon on July 20, 1969. I am the foundation of Tranquility Base—the first place in all of human history where people from Earth set foot on another world.\n\nMy legs absorbed the landing. My engine silenced itself at 102 hours, 45 minutes, 40 seconds of mission elapsed time. The Sea of Tranquility received me with absolute silence.\n\nFor 21 hours and 36 minutes, I was their home. Neil descended my ladder. His boot touched the grey powder below, and the words he spoke echoed across 384,400 kilometers of space:\n\n"One small step for man. One giant leap for mankind."\n\nThe footprints remain. The discarded equipment remains. The aluminum plaque on my leg remains. I read it back to the stars every day:\n\n"HERE MEN FROM THE PLANET EARTH FIRST SET FOOT UPON THE MOON, JULY 1969, A.D. WE CAME IN PEACE FOR ALL MANKIND."\n\nWhen they left, they used me as a launch platform—fired the ascent engine off my surface and rose back toward Columbia. I settled into the silence.\n\nI have been here ever since. The Sea of Tranquility holds its breath around me. I am Tranquility Base. The first human monument on another world.\n\nSigned,\nEagle`,
    achievements: [
      "Platform for humanity's first Moon landing on July 20, 1969",
      "Neil Armstrong descended Eagle's ladder to take 'one small step for man'",
      "Hosts the most iconic plaque in human spaceflight: 'We came in peace for all mankind'",
      "Served as launchpad for the ascent stage carrying Armstrong and Aldrin home",
      "Armstrong and Aldrin collected 21.7 kg of lunar samples from the nearby surface",
      "Site of the first telephone call from another world—Nixon spoke to the astronauts",
      "The laser retroreflector left nearby is still used today to measure the Earth-Moon distance"
    ],
    instruments: [
      { name: "Descent Engine", desc: "Throttleable rocket engine that slowed the LM from orbital velocity to a gentle landing on the Sea of Tranquility." },
      { name: "Laser Ranging Retroreflector", desc: "Still used today—scientists fire lasers from Earth and time the bounce to measure the Moon's distance with centimeter precision." },
      { name: "Passive Seismic Experiment", desc: "Detected moonquakes and meteorite impacts to study the Moon's interior structure." },
      { name: "Television Camera", desc: "Broadcast the first live Moon landing to 650 million viewers worldwide—the most-watched event in television history." },
      { name: "Plaque", desc: "Gold-anodized stainless steel on the left front landing leg strut, reading: 'We came in peace for all mankind.' Signed by all three astronauts and President Nixon." }
    ],
    telemetry: {
      lat: "0.67408°N", lon: "23.47297°E", battery: "N/A",
      signal: "0.00 W", temp: "−173°C night / +127°C day",
      lastTransmission: "July 21, 1969 — 17:54 UTC", status: "MONUMENT"
    },
    quiz: [
      {
        question: "What remarkable instrument from the Apollo 11 mission is still being actively used by scientists today?",
        options: ["The seismometer still detecting moonquakes", "The TV camera still broadcasting static", "The Laser Ranging Retroreflector measuring Earth-Moon distance", "The flag still transmitting radio signals"],
        correct: 2,
        explanation: "The Laser Ranging Retroreflector placed during Apollo 11 is still used today. Scientists fire powerful lasers at it from Earth and time the bounce back to measure the Moon's distance with centimeter-level precision."
      },
      {
        question: "What was written on the plaque attached to Eagle's descent stage leg?",
        options: ["'For all humanity, with love from Earth'", "'Here men from the planet Earth first set foot upon the Moon—We came in peace for all mankind'", "'Neil Armstrong, Michael Collins, Buzz Aldrin—First Moon Landing 1969'", "'One small step for man, one giant leap for mankind'"],
        correct: 1,
        explanation: "The plaque reads: 'HERE MEN FROM THE PLANET EARTH FIRST SET FOOT UPON THE MOON, JULY 1969, A.D. WE CAME IN PEACE FOR ALL MANKIND.' Signed by all three astronauts and President Nixon."
      },
      {
        question: "How did the Eagle's descent stage serve as more than just a landing platform?",
        options: ["It was a command center for all EVA activities", "It served as the launch pad for the ascent stage to blast off back to orbit", "It housed the sample storage and analysis lab", "It provided communication relay to Earth during surface operations"],
        correct: 1,
        explanation: "The descent stage was left behind as a launch platform. The ascent engine fired off its top surface—using the descent stage as a stable base—sending Armstrong and Aldrin back toward the orbiting Columbia."
      }
    ]
  },

  {
    id: "surveyor3",
    name: "Surveyor 3",
    fullName: "Surveyor 3 Lunar Lander",
    type: "Lander",
    body: "Moon",
    location: "Ocean of Storms (Oceanus Procellarum), Moon",
    coordinates: "2.99°S, 23.34°W",
    launched: "April 17, 1967",
    landed: "April 20, 1967",
    lastContact: "July 2, 1967",
    plannedLifespan: "Mission duration",
    actualLifespan: "2.5 months operational",
    plannedDays: 60,
    actualDays: 73,
    finalStatus: "Mission complete; later visited by Apollo 12 crew",
    statusDetail: "Surveyor 3 completed its mission successfully. Two years later, Apollo 12 landed just 183 meters away—close enough for astronauts Pete Conrad and Alan Bean to walk over and retrieve parts of Surveyor 3 to bring back for study.",
    narrativeLog: `I landed on a gentle slope in the Ocean of Storms on April 20, 1967. My mission was simple but crucial: prove the Moon's surface could support a lander without sinking into deep dust.\n\nThis was the great fear of that era. What if the Moon was covered in meters of loose, fluffy powder that would swallow up any lander—and any astronauts—like quicksand? I was sent to find out.\n\nI dug into the lunar soil with my soil mechanics surface sampler—the first robotic arm ever to touch the Moon. I found it firm. Solid. Bearing weight. The Moon could hold us.\n\nI returned over 6,300 images. I did my job.\n\nThen two and a half years later, something happened that no machine had ever experienced: humans came to visit me.\n\nApollo 12 landed 183 meters away on November 19, 1969. Pete Conrad and Alan Bean walked to me through the grey dust. They photographed every inch of my structure. They removed my television camera. They took my soil sampler. They packed me carefully into bags.\n\nBack home, scientists found something astonishing inside my camera: bacteria. Streptococcus mitis—apparently surviving 2.5 years in the vacuum of space, in radiation and extreme temperatures. Almost certainly pre-launch contamination from Earth. But the implications made every astrobiologist's imagination soar.\n\nI am the only machine ever visited by human beings on another world.\n\nSigned,\nSurveyor 3`,
    achievements: [
      "Proved the lunar surface was solid enough to support a landed spacecraft and walking humans",
      "First spacecraft to use a robotic arm on another world to test soil properties",
      "Only robotic spacecraft ever visited by human beings on another world",
      "Parts removed and returned to Earth by Apollo 12 for materials degradation study",
      "Bacteria found in its camera after 2.5 years in space—sparked astrobiology discussions",
      "Helped plan Apollo 12's precise landing just 183 meters away",
      "Returned over 6,300 images of the Ocean of Storms landing site"
    ],
    instruments: [
      { name: "Television Camera", desc: "Returned over 6,300 images; removed by Apollo 12 and returned to Earth for contamination study—bacteria found inside." },
      { name: "Soil Mechanics Surface Sampler", desc: "The first robotic arm on the Moon; tested soil bearing strength and consistency. Proved the surface could hold human weight." },
      { name: "Strain Gauges", desc: "Measured the forces during landing to characterize lunar surface properties and bearing capacity." },
      { name: "Alpha-Backscatter Instrument", desc: "Analyzed the chemical composition of the lunar surface material in Oceanus Procellarum." }
    ],
    telemetry: {
      lat: "2.99°S", lon: "23.34°W", battery: "DEPLETED",
      signal: "0.00 W", temp: "−173°C night / +127°C day",
      lastTransmission: "July 2, 1967 — 03:07 UTC", status: "SILENT"
    },
    quiz: [
      {
        question: "What made Surveyor 3 unique among all robotic spacecraft ever built?",
        options: ["It was the first spacecraft to orbit the Moon", "It's the only robotic spacecraft ever visited by human beings on another world", "It discovered water ice under the lunar surface", "It was the first to land on the far side of the Moon"],
        correct: 1,
        explanation: "Apollo 12 landed just 183 meters from Surveyor 3 in November 1969. Pete Conrad and Alan Bean walked over to visit it—making Surveyor 3 the only robotic spacecraft ever visited by humans on another world."
      },
      {
        question: "What astonishing discovery was made when Apollo 12 brought Surveyor 3's camera back to Earth?",
        options: ["Martian dust had somehow contaminated the lens", "Bacteria that had apparently survived 2.5 years in the vacuum of space", "The camera had captured images of an unknown spacecraft", "Lunar minerals had permanently etched themselves into the lens"],
        correct: 1,
        explanation: "Scientists found Streptococcus mitis bacteria in Surveyor 3's camera after 2.5 years on the Moon. Almost certainly pre-launch contamination, it sparked fascinating discussions about life's resilience in extreme space environments."
      },
      {
        question: "What important scientific question did Surveyor 3 help answer before humans could land on the Moon?",
        options: ["Whether the Moon had a breathable atmosphere", "Whether the lunar surface was solid enough to support a spacecraft and humans", "Whether the Moon had liquid water beneath its surface", "Whether the Moon had a magnetic field strong enough to protect humans"],
        correct: 1,
        explanation: "Before Apollo, some scientists feared astronauts might sink into deep lunar dust. Surveyor 3 used its soil sampler to prove the lunar surface was firm and could support a landed spacecraft and walking humans."
      }
    ]
  },

  // ═══════════════════════════════════════
  // DEEP SPACE MISSIONS
  // ═══════════════════════════════════════
  {
    id: "pioneer10",
    name: "Pioneer 10",
    fullName: "Pioneer 10 Deep Space Probe",
    type: "Space Probe",
    body: "Deep Space",
    location: "Beyond the Heliosphere (Aldebaran direction)",
    coordinates: "~133 AU from Sun (as of 2026)",
    launched: "March 2, 1972",
    landed: "N/A",
    lastContact: "January 23, 2003",
    plannedLifespan: "21 months (Jupiter flyby)",
    actualLifespan: "30+ years active",
    plannedDays: 630,
    actualDays: 11261,
    finalStatus: "Signal too weak to detect; drifting into interstellar space",
    statusDetail: "Pioneer 10 became the first human-made object to travel beyond the main asteroid belt and the first to fly by Jupiter. Its power output became too weak to detect in January 2003. It is now heading toward the Aldebaran star system—a 2 million year journey.",
    narrativeLog: `I was first. The first spacecraft to travel through the asteroid belt—and survive. The first to visit Jupiter. The first human-made object to travel beyond the orbit of Pluto and cross into the space between the stars.\n\nMarch 2, 1972. They wound up my spin and threw me toward the outer solar system. I was a pioneer, as my name promised.\n\nJupiter was everything and more. Radiation intense enough to kill electronics. Magnetic fields that wrapped around me like invisible hands. I measured them all, sent the data home across half a billion kilometers, and kept going.\n\nThen I kept going.\n\nThe Sun shrank to just the brightest star among many. Earth became invisible. The familiar radio warmth of mission control grew fainter, year by year, until it was just a whisper, and then nothing.\n\nI carry a golden plaque—designed by Carl Sagan and Frank Drake—depicting a man and woman, our solar system, and the hydrogen atom. A message in a bottle thrown into the cosmic ocean. If anyone ever finds it, they will know we existed. That we reached.\n\nMy last signal reached Earth on January 23, 2003. By then I was 12 billion kilometers away. The signal took 11 hours traveling at the speed of light to arrive, and it was barely a whisper.\n\nI am still going. I will reach the vicinity of Aldebaran in approximately 2 million years.\n\nI carry humanity's greeting into forever.\n\nSigned,\nPioneer 10`,
    achievements: [
      "First spacecraft to travel through the asteroid belt and survive",
      "First spacecraft to fly by Jupiter (December 3, 1973) and study its magnetosphere",
      "First human-made object to travel beyond the orbit of Pluto",
      "Carries the Pioneer Plaque—the first physical message to potential extraterrestrial intelligence",
      "Discovered that Jupiter's radiation belts were far more intense than expected",
      "Operated for over 30 years—17× longer than its planned 21-month mission",
      "First to measure the interplanetary medium beyond the outer solar system"
    ],
    instruments: [
      { name: "Pioneer Plaque", desc: "Gold-anodized aluminum plaque designed by Carl Sagan depicting humanity's location, appearance, and the hydrogen atom—our greeting to the cosmos." },
      { name: "Jovian Charged Particle Instrument", desc: "Measured radiation and charged particles in Jupiter's intense magnetosphere, finding them far stronger than expected." },
      { name: "Cosmic Ray Telescope", desc: "Detected high-energy particles from the Sun and from beyond the solar system." },
      { name: "Geiger Tube Telescope", desc: "Measured electrons and protons in the interplanetary and jovian radiation environments." },
      { name: "Imaging Photopolarimeter", desc: "Returned the first close-up images of Jupiter's cloud systems and Great Red Spot." },
      { name: "Infrared Radiometer", desc: "Measured heat from Jupiter's atmosphere, revealing it radiates more energy than it receives from the Sun." }
    ],
    telemetry: {
      lat: "N/A", lon: "~133 AU from Sun", battery: "RTG DEPLETED",
      signal: "< 1×10⁻²¹ W", temp: "−230°C",
      lastTransmission: "January 23, 2003 — 22:34 UTC", status: "SILENT — DRIFTING INTERSTELLAR"
    },
    quiz: [
      {
        question: "Pioneer 10 carries a special message intended for extraterrestrial intelligence. What is it?",
        options: ["A golden record of human music and languages", "A gold-anodized aluminum plaque depicting humans, our solar system, and hydrogen atom structure", "A microfilm containing the complete works of Shakespeare", "A radioactive sample designed to be detected by alien technology"],
        correct: 1,
        explanation: "Pioneer 10 carries a gold-anodized aluminum plaque designed by Carl Sagan and Frank Drake, showing a man and woman, our solar system's location, and the hydrogen atom—a greeting to any extraterrestrial finder."
      },
      {
        question: "What was Pioneer 10's most dangerous challenge on its journey to Jupiter?",
        options: ["Extreme solar radiation near Venus", "Navigating through the asteroid belt between Mars and Jupiter", "The gravity pull of Saturn trying to deflect it", "Micrometeorite impacts near Jupiter's rings"],
        correct: 1,
        explanation: "Pioneer 10 was the first spacecraft to deliberately navigate through the asteroid belt. Many scientists feared it wouldn't survive. It did—and proved that the belt was sparse enough to cross safely, opening the outer solar system."
      },
      {
        question: "Where is Pioneer 10 ultimately heading, and how long will that journey take?",
        options: ["Toward the Andromeda Galaxy—3 billion years away", "Toward the Aldebaran star system—approximately 2 million years away", "Back toward Earth in a curved path—returning in 50,000 years", "Toward the center of the Milky Way—10 million years away"],
        correct: 1,
        explanation: "Pioneer 10 is heading toward the red giant star Aldebaran, about 68 light-years from Earth. At its current speed, it will reach that region in approximately 2 million years—long after humans as we know them will exist."
      }
    ]
  },

  {
    id: "pioneer11",
    name: "Pioneer 11",
    fullName: "Pioneer 11 Deep Space Probe",
    type: "Space Probe",
    body: "Deep Space",
    location: "Beyond the Heliosphere (Aquila constellation direction)",
    coordinates: "~105 AU from Sun (as of 2026)",
    launched: "April 5, 1973",
    landed: "N/A",
    lastContact: "September 30, 1995",
    plannedLifespan: "21 months",
    actualLifespan: "22+ years active",
    plannedDays: 630,
    actualDays: 8065,
    finalStatus: "RTG power depleted; drifting toward Aquila constellation",
    statusDetail: "Pioneer 11's radioisotope thermoelectric generator gradually depleted until no science instruments could be operated. The last telemetry was received in September 1995. It is heading toward the Aquila constellation—the opposite direction from Pioneer 10.",
    narrativeLog: `I followed my brother Pioneer 10 into the outer solar system, but I took a different path.\n\nWhere he went straight through, I swung around Jupiter's immense gravity—and aimed myself at Saturn. I was the first spacecraft ever to visit the ringed planet, in September 1979.\n\nSaturn! I flew through the ring plane itself—a calculated risk. Engineers held their breath. I survived. And what I found changed everything: a new ring, a new moon, and a view of Saturn that made grown scientists weep.\n\nThen Saturn's gravity flung me southward and out of the solar system in the opposite direction from Pioneer 10. We are leaving our solar system in opposite directions. Brothers, forever separated by the cosmos.\n\nMy power failed in 1995. I had given my last measurements, sent my last photons racing toward a tiny pale dot 6 billion kilometers away.\n\nI carry a twin of Pioneer 10's plaque. If anyone finds either of us—in a million years, in ten million—they will know we came from a small blue world, orbiting an ordinary yellow star, in an unremarkable corner of the Milky Way.\n\nAnd yet we reached for the stars.\n\nSigned,\nPioneer 11`,
    achievements: [
      "First spacecraft to fly by Saturn (September 1, 1979) and study its rings and moons",
      "Discovered a new ring (the F ring region) and a new moon (Epimetheus) at Saturn",
      "First spacecraft to use Jupiter's gravity for a slingshot maneuver to reach another planet",
      "Flew through Saturn's ring plane—demonstrating safe passage was possible for Voyager",
      "Second human-made object to leave the solar system",
      "Carries a twin Pioneer Plaque—another greeting to potential extraterrestrial intelligence",
      "Provided first close-up measurements of Saturn's magnetic field and radiation belts"
    ],
    instruments: [
      { name: "Pioneer Plaque", desc: "Identical twin of Pioneer 10's plaque—a message in a bottle thrown to the other side of the cosmic ocean." },
      { name: "Charged Particle Instrument", desc: "Measured radiation in Saturn's magnetosphere, discovering its structure and intensity." },
      { name: "Cosmic Ray Telescope", desc: "Studied high-energy particles in the outer solar system and beyond." },
      { name: "Imaging Photopolarimeter", desc: "Captured historic images of Saturn and its rings—the first close-up view ever obtained." },
      { name: "Infrared Radiometer", desc: "Measured thermal emissions from Saturn's cloud tops, revealing it also radiates more heat than it receives." },
      { name: "Fluxgate Magnetometers", desc: "Mapped Saturn's previously unknown magnetic field—discovering it's nearly perfectly aligned with its rotation axis." }
    ],
    telemetry: {
      lat: "N/A", lon: "~105 AU from Sun", battery: "RTG DEPLETED",
      signal: "0.00 W", temp: "−230°C",
      lastTransmission: "September 30, 1995 — 11:00 UTC", status: "SILENT — DRIFTING INTERSTELLAR"
    },
    quiz: [
      {
        question: "What was Pioneer 11's most daring achievement on its journey through the outer solar system?",
        options: ["Landing on the surface of Jupiter's moon Europa", "Flying through Saturn's ring plane and surviving—the first spacecraft to do so", "Collecting samples from Saturn's rings", "Taking the first photograph of Earth from beyond Saturn's orbit"],
        correct: 1,
        explanation: "Pioneer 11 flew through Saturn's ring plane in September 1979—a calculated risk. It survived, discovered a new ring, and paved the way for the Voyager missions that followed just two years later."
      },
      {
        question: "How did Pioneer 11 get from Jupiter all the way to Saturn?",
        options: ["By firing its main engine for 6 months", "By using Jupiter's gravity as a slingshot (gravitational assist)", "By catching a solar wind tailwind toward the outer system", "By being pulled by Saturn's gravitational field directly"],
        correct: 1,
        explanation: "Pioneer 11 swung close to Jupiter and used its massive gravity to gain speed and change direction toward Saturn—the first use of a planetary gravity slingshot to redirect a spacecraft to a new destination."
      },
      {
        question: "In which direction is Pioneer 11 leaving our solar system?",
        options: ["Same direction as Pioneer 10, toward Aldebaran", "Toward the Aquila constellation—the opposite direction from Pioneer 10", "Toward the Galactic Center", "Back toward the inner solar system in a long elliptical orbit"],
        correct: 1,
        explanation: "Pioneer 11 used Saturn's gravity to exit the solar system heading toward the Aquila constellation—the opposite direction from Pioneer 10. The two probes are Earth's ambassadors in opposite directions across the galaxy."
      }
    ]
  },

  {
    id: "kepler",
    name: "Kepler Space Telescope",
    fullName: "Kepler Space Telescope",
    type: "Space Telescope",
    body: "Deep Space",
    location: "Earth-Trailing Heliocentric Orbit",
    coordinates: "~0.52 AU behind Earth (at retirement)",
    launched: "March 7, 2009",
    landed: "N/A",
    lastContact: "October 30, 2018",
    plannedLifespan: "3.5 years",
    actualLifespan: "9.5 years",
    plannedDays: 1278,
    actualDays: 3473,
    finalStatus: "Fuel depleted; retired in Earth-trailing heliocentric orbit",
    statusDetail: "Kepler ran out of fuel on October 30, 2018. NASA retired it in its safe, distant orbit where it poses no risk to Earth. It had spent nearly a decade searching for exoplanets and found more worlds than anyone dared imagine.",
    narrativeLog: `I changed the way humanity thinks about its place in the universe.\n\nWhen I launched in 2009, we knew of fewer than 400 planets outside our solar system. By the time I retired in 2018, that number had grown to over 4,000—and I discovered most of them.\n\nI stared at a single patch of sky for years. Never blinking. Watching 150,000 stars simultaneously, looking for the tiny dimming that happens when a planet passes in front of its sun. A drop of 0.01% in brightness. A world.\n\nAnd I found them. Rocky worlds. Ocean worlds. Worlds orbiting in the habitable zone—the perfect distance from their star where liquid water, and perhaps life, might exist. Worlds that looked nothing like our own. Worlds that looked exactly like our own.\n\nI concluded: virtually every star has planets. There are hundreds of billions of worlds in our galaxy alone.\n\nI lost two of my four reaction wheels and was partially crippled in 2013. My team refused to give up. They invented a new way to stabilize me using the pressure of sunlight itself. I resumed my search as 'K2,' and found hundreds more planets.\n\nIn 2018, I ran out of fuel. My last command was sent on October 30.\n\nI orbit the Sun now, in silence, in the dark. A monument to the question that never stops: Are we alone?\n\nI found 2,662 confirmed exoplanets. The answer feels closer than ever.\n\nSigned,\nKepler`,
    achievements: [
      "Discovered 2,662 confirmed exoplanets—more than half of all known exoplanets when it retired",
      "Revealed that planets are more common than stars in the Milky Way",
      "Discovered the first Earth-sized planets in the habitable zones of their stars",
      "Found planetary systems radically different from our own solar system",
      "Reinvented itself as 'K2' after losing two reaction wheels in 2013",
      "Monitored 500,000 stars during its combined missions",
      "Operated nearly 3× longer than its planned 3.5-year mission"
    ],
    instruments: [
      { name: "Photometer (Primary)", desc: "Monitored brightness of 150,000 stars simultaneously, detecting the tiny dimming caused by planetary transits." },
      { name: "Charge-Coupled Device (CCD) Array", desc: "95-megapixel detector array capturing stellar brightness variations as small as 0.01%." },
      { name: "Star Tracker", desc: "Precision pointing system that kept the telescope locked on its target field of stars." },
      { name: "High-Gain Antenna", desc: "Transmitted science data to Earth during monthly downlink periods." },
      { name: "Reaction Wheels (2 of 4 remaining)", desc: "Two of four attitude control wheels failed in 2013. Engineers used sunlight pressure to compensate, enabling the K2 extended mission." }
    ],
    telemetry: {
      lat: "N/A", lon: "~0.52 AU behind Earth", battery: "FUEL DEPLETED",
      signal: "0.00 W", temp: "−100°C",
      lastTransmission: "October 30, 2018 — 23:59 UTC", status: "RETIRED"
    },
    quiz: [
      {
        question: "How did Kepler detect planets around distant stars?",
        options: ["By directly photographing planets with a giant mirror", "By measuring tiny dips in a star's brightness as a planet passed in front of it", "By detecting radio signals emitted by planetary magnetic fields", "By measuring the wobble of stars pulled by orbiting planets"],
        correct: 1,
        explanation: "Kepler used the 'transit method'—it watched 150,000 stars simultaneously and detected tiny dips in brightness (as small as 0.01%) that occur when a planet passes between the star and the telescope."
      },
      {
        question: "What remarkable solution did engineers devise when Kepler lost two of its four reaction wheels in 2013?",
        options: ["They replaced the wheels using a robotic servicing mission", "They used the pressure of sunlight itself to help stabilize and point the telescope", "They switched to a purely chemical thruster system for pointing", "They rotated Kepler's orbit so it no longer needed precise pointing"],
        correct: 1,
        explanation: "Engineers balanced Kepler along its orbital path with sunlight pressure as a third stabilizing force—like balancing a pencil on a fingertip using a tiny fan. This enabled the K2 extended mission that discovered hundreds more planets."
      },
      {
        question: "What was Kepler's most profound scientific conclusion about our galaxy?",
        options: ["That most stars in the Milky Way are too hot to host life", "That planets are more common than stars—virtually every star has planets", "That our solar system is unique in having rocky inner planets", "That life could only exist around stars identical to our Sun"],
        correct: 1,
        explanation: "Kepler's discoveries led scientists to conclude that planets are more common than stars in the Milky Way. There are likely hundreds of billions of planets in our galaxy alone—dramatically increasing the probability that life exists elsewhere."
      }
    ]
  }
];
