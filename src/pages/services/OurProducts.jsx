import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// sections 
import Kindergarten from "../../assets/schoolpainting/kindergarten/Kindergarten.jpg";
import Kindergarten1 from "../../assets/schoolpainting/kindergarten/Kindergarten1.jpg";
import Kindergarten2 from "../../assets/schoolpainting/kindergarten/Kindergarten2.jpg";
import Kindergarten3 from "../../assets/schoolpainting/kindergarten/Kindergarten3.jpg";
import Kindergarten4 from "../../assets/schoolpainting/kindergarten/Kindergarten4.jpg";
import Kindergarten5 from "../../assets/schoolpainting/kindergarten/Kindergarten5.jpg";
import Kindergarten6 from "../../assets/schoolpainting/kindergarten/Kindergarten6.jpg";
import Kindergarten7 from "../../assets/schoolpainting/kindergarten/Kindergarten7.jpg";

import Government from "../../assets/schoolpainting/governmentschool/Government.jpg";
import Government1 from "../../assets/schoolpainting/governmentschool/Government1.jpg";
import Government2 from "../../assets/schoolpainting/governmentschool/Government2.jpg";
import Government3 from "../../assets/schoolpainting/governmentschool/Government3.jpg";
import Government4 from "../../assets/schoolpainting/governmentschool/Government4.jpg";
import Government5 from "../../assets/schoolpainting/governmentschool/Government5.jpg";
import Government6 from "../../assets/schoolpainting/governmentschool/Government6.jpg";
import Government7 from "../../assets/schoolpainting/governmentschool/Government7.jpg";

import HighSchool from "../../assets/schoolpainting/highschool/Highschool.jpg";
import HighSchool1 from "../../assets/schoolpainting/highschool/Highschool1.jpg";
import HighSchool2 from "../../assets/schoolpainting/highschool/Highschool2.jpg";
import HighSchool3 from "../../assets/schoolpainting/highschool/Highschool3.jpg";
import HighSchool4 from "../../assets/schoolpainting/highschool/Highschool4.jpg";
import HighSchool5 from "../../assets/schoolpainting/highschool/Highschool5.JPG";
import HighSchool6 from "../../assets/schoolpainting/highschool/Highschool6.jpg";

import Library from "../../assets/schoolpainting/library/Library.jpg";
import Library1 from "../../assets/schoolpainting/library/Library1.jpg";
import Library2 from "../../assets/schoolpainting/library/Library2.jpg";
import Library3 from "../../assets/schoolpainting/library/Library3.jpg";
import Library4 from "../../assets/schoolpainting/library/Library4.jpg";
import Library5 from "../../assets/schoolpainting/library/Library5.jpg";
import Library6 from "../../assets/schoolpainting/library/Library6.jpg";
import Library7 from "../../assets/schoolpainting/library/Library7.jpg";
import Library8 from "../../assets/schoolpainting/library/Library8.webp";

import PlayArea from "../../assets/schoolpainting/playarea/PlayArea.jpg";
import PlayArea1 from "../../assets/schoolpainting/playarea/PlayArea1.jpg";
import PlayArea2 from "../../assets/schoolpainting/playarea/PlayArea2.jpg";
import PlayArea3 from "../../assets/schoolpainting/playarea/PlayArea3.jpg";
import PlayArea4 from "../../assets/schoolpainting/playarea/PlayArea4.jpg";
import PlayArea5 from "../../assets/schoolpainting/playarea/PlayArea5.JPG";
import PlayArea6 from "../../assets/schoolpainting/playarea/PlayArea6.jpg";
import PlayArea7 from "../../assets/schoolpainting/playarea/PlayArea7.jpg";
import PlayArea8 from "../../assets/schoolpainting/playarea/PlayArea8.jpg";

import PlaySchool from "../../assets/schoolpainting/playschool/PlaySchool.jpg";
import PlaySchool1 from "../../assets/schoolpainting/playschool/PlaySchool1.jpg";
import PlaySchool2 from "../../assets/schoolpainting/playschool/PlaySchool2.jpg";
import PlaySchool3 from "../../assets/schoolpainting/playschool/PlaySchool3.JPG";
import PlaySchool4 from "../../assets/schoolpainting/playschool/PlaySchool4.jpg";
import PlaySchool5 from "../../assets/schoolpainting/playschool/PlaySchool5.JPG";
import PlaySchool6 from "../../assets/schoolpainting/playschool/PlaySchool6.JPG";
import PlaySchool7 from "../../assets/schoolpainting/playschool/PlaySchool7.JPG";
import PlaySchool8 from "../../assets/schoolpainting/playschool/PlaySchool8.jpg";

import ScienceComputer from "../../assets/schoolpainting/sciencecomputer/ScienceComputer.jpg";
import ScienceComputer1 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer1.webp";
import ScienceComputer2 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer2.jpg";
import ScienceComputer3 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer3.jpg";
import ScienceComputer4 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer4.jpg";
import ScienceComputer5 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer5.JPG";
import ScienceComputer6 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer6.JPG";
import ScienceComputer7 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer7.jpg";
import ScienceComputer8 from "../../assets/schoolpainting/sciencecomputer/ScienceComputer8.jpg";
 
import Compound from "../../assets/schoolpainting/compound/Compound.jpg";
import Compound1 from "../../assets/schoolpainting/compound/Compound1.jpg";
import Compound2 from "../../assets/schoolpainting/compound/Compound2.jpg";
import Compound3 from "../../assets/schoolpainting/compound/Compound3.jpg";
import Compound4 from "../../assets/schoolpainting/compound/Compound4.jpg";
import Compound5 from "../../assets/schoolpainting/compound/Compound5.jpg";
import Compound6 from "../../assets/schoolpainting/compound/Compound6.jpg";
import Compound7 from "../../assets/schoolpainting/compound/Compound7.jpg";
import Compound8 from "../../assets/schoolpainting/compound/Compound8.jpeg";
import Compound9 from "../../assets/schoolpainting/compound/Compound9.jpg";


// sections2 
import dwallart1 from "../../assets/WallDecors/3D Wall Art/dwallart (1).jpeg"
import dwallart2 from "../../assets/WallDecors/3D Wall Art/dwallart (1).jpg"
import dwallart3 from "../../assets/WallDecors/3D Wall Art/dwallart (1).webp"
import dwallart4 from "../../assets/WallDecors/3D Wall Art/dwallart (2).jpeg"
import dwallart5 from "../../assets/WallDecors/3D Wall Art/dwallart (2).jpg"
import dwallart6 from "../../assets/WallDecors/3D Wall Art/dwallart (3).jpeg"
import dwallart7 from "../../assets/WallDecors/3D Wall Art/dwallart (3).jpg"
import dwallart8 from "../../assets/WallDecors/3D Wall Art/dwallart (4).jpeg"
import dwallart9 from "../../assets/WallDecors/3D Wall Art/dwallart (4).jpeg"

import hospital1 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital1.png"
import hospital2 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital2.jpg"
import hospital3 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital3.jpg"
import hospital4 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital4.jpg"
import hospital5 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital5.jpg"
import hospital6 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital6.jpg"
import hospital7 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital7.jpg"
import hospital8 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital8.jpg"
import hospital9 from "../../assets/WallDecors/Hospitals and Clinics Wall Painting/hospital9.jpg"

import hotel1 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (1).jpg"
import hotel2 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (2).jpg"
import hotel3 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (3).jpg"
import hotel4 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (4).jpg"
import hotel5 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (5).jpg"
import hotel6 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (6).jpg"
import hotel7 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (7).jpg"
import hotel8 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (8).jpg"
import hotel9 from "../../assets/WallDecors/Hotels & Restaurants Wall Painting/Hotels (9).jpg"


import liquid1 from "../../assets/WallDecors/Liquid Wallpaper/liquid (1).jpeg"
import liquid2 from "../../assets/WallDecors/Liquid Wallpaper/liquid (1).jpg"
import liquid3 from "../../assets/WallDecors/Liquid Wallpaper/liquid (1).webp"
import liquid4 from "../../assets/WallDecors/Liquid Wallpaper/liquid (2).jpg"
import liquid5 from "../../assets/WallDecors/Liquid Wallpaper/liquid (2).webp"
import liquid6 from "../../assets/WallDecors/Liquid Wallpaper/liquid (3).jpg"
import liquid7 from "../../assets/WallDecors/Liquid Wallpaper/liquid (4).jpg"
import liquid8 from "../../assets/WallDecors/Liquid Wallpaper/liquid (5).jpg"

import office1 from "../../assets/WallDecors/Office Wall Painting/office (1).jpg"
import office2 from "../../assets/WallDecors/Office Wall Painting/office (2).jpg"
import office3 from "../../assets/WallDecors/Office Wall Painting/office (3).jpg"
import office4 from "../../assets/WallDecors/Office Wall Painting/office (4).jpg"
import office5 from "../../assets/WallDecors/Office Wall Painting/office (5).jpg"
import office6 from "../../assets/WallDecors/Office Wall Painting/office (6).jpg"
import office7 from "../../assets/WallDecors/Office Wall Painting/office (7).jpg"
import office8 from "../../assets/WallDecors/Office Wall Painting/office (8).jpg"
import office9 from "../../assets/WallDecors/Office Wall Painting/office (9).jpg"

import street1 from "../../assets/WallDecors/Street Wall Painting/street (1).jpg"
import street2 from "../../assets/WallDecors/Street Wall Painting/street (2).jpg"
import street3 from "../../assets/WallDecors/Street Wall Painting/street (3).jpg"
import street4 from "../../assets/WallDecors/Street Wall Painting/street (4).jpg"
import street5 from "../../assets/WallDecors/Street Wall Painting/street (5).jpg"
import street6 from "../../assets/WallDecors/Street Wall Painting/street (6).jpg"
import street7 from "../../assets/WallDecors/Street Wall Painting/street (7).jpg"
import street8 from "../../assets/WallDecors/Street Wall Painting/street (8).jpg"
import street9 from "../../assets/WallDecors/Street Wall Painting/street (9).jpg"

import Textured1 from "../../assets/WallDecors/Textured Painting/Textured (1).jpg"
import Textured2 from "../../assets/WallDecors/Textured Painting/Textured (2).jpg"
import Textured3 from "../../assets/WallDecors/Textured Painting/Textured (3).jpg"
import Textured4 from "../../assets/WallDecors/Textured Painting/Textured (4).jpg"
import Textured5 from "../../assets/WallDecors/Textured Painting/Textured (5).jpg"
import Textured6 from "../../assets/WallDecors/Textured Painting/Textured (6).jpg"
import Textured7 from "../../assets/WallDecors/Textured Painting/Textured (7).jpg"
import Textured8 from "../../assets/WallDecors/Textured Painting/Textured (8).jpg"
import Textured9 from "../../assets/WallDecors/Textured Painting/Textured (9).jpg"

import WallArt1 from "../../assets/WallDecors/Wall Art/WallArt (1).jpg"
import WallArt2 from "../../assets/WallDecors/Wall Art/WallArt (2).jpg"
import WallArt3 from "../../assets/WallDecors/Wall Art/WallArt (3).jpg"
import WallArt4 from "../../assets/WallDecors/Wall Art/WallArt (4).jpg"
import WallArt5 from "../../assets/WallDecors/Wall Art/WallArt (5).jpg"
import WallArt6 from "../../assets/WallDecors/Wall Art/WallArt (6).jpg"
import WallArt7 from "../../assets/WallDecors/Wall Art/WallArt (7).jpg"
import WallArt8 from "../../assets/WallDecors/Wall Art/WallArt (8).jpg"
import WallArt9 from "../../assets/WallDecors/Wall Art/WallArt (9).jpg"


// sections3
import WallRelief from "../../assets/mural/Wall Relief Mural Art/wall relief (1).jpeg";
import WallRelief1 from "../../assets/mural/Wall Relief Mural Art/wall relief (1).jpg";
import WallRelief2 from "../../assets/mural/Wall Relief Mural Art/wall relief (1).webp";
import WallRelief3 from "../../assets/mural/Wall Relief Mural Art/wall relief (2).jpeg";
import WallRelief4 from "../../assets/mural/Wall Relief Mural Art/wall relief (3).jpeg";
import WallRelief5 from "../../assets/mural/Wall Relief Mural Art/wall relief (4).jpeg";
import WallRelief6 from "../../assets/mural/Wall Relief Mural Art/wall relief (5).jpeg";
import WallRelief7 from "../../assets/mural/Wall Relief Mural Art/wall relief (6).jpeg";
import WallRelief8 from "../../assets/mural/Wall Relief Mural Art/wall relief (7).jpeg";
import WallRelief9 from "../../assets/mural/Wall Relief Mural Art/wall relief (8).jpeg";
import WallRelief10 from "../../assets/mural/Wall Relief Mural Art/wall relief (9).jpeg";

import Drywall from "../../assets/mural/drywall/Drywall.jpeg";
import Drywall1 from "../../assets/mural/drywall/Drywall1.jpeg";
import Drywall2 from "../../assets/mural/drywall/Drywall2.jpg";
import Drywall3 from "../../assets/mural/drywall/Drywall3.jpg";
import Drywall4 from "../../assets/mural/drywall/Drywall4.jpeg";
import Drywall5 from "../../assets/mural/drywall/Drywall5.jpg";
import Drywall6 from "../../assets/mural/drywall/Drywall6.jpeg";
import Drywall7 from "../../assets/mural/drywall/Drywall7.jpg";


import Elevation from "../../assets/mural/elevation/Elevation.jpg";
import Elevation1 from "../../assets/mural/elevation/Elevation1.jpg";
import Elevation2 from "../../assets/mural/elevation/Elevation2.jpg";
import Elevation3 from "../../assets/mural/elevation/Elevation3.jpg";
import Elevation4 from "../../assets/mural/elevation/Elevation4.jpg";
import Elevation5 from "../../assets/mural/elevation/Elevation5.jpg";
import Elevation6 from "../../assets/mural/elevation/Elevation6.jpg";
import Elevation7 from "../../assets/mural/elevation/Elevation7.jpg";
import Elevation8 from "../../assets/mural/elevation/Elevation8.jpg";
import Elevation9 from "../../assets/mural/elevation/Elevation9.jpg";

import Cement from "../../assets/mural/cement/Cement.jpg";
import Cement1 from "../../assets/mural/cement/Cement1.jpg";
import Cement2 from "../../assets/mural/cement/Cement2.jpg";
import Cement3 from "../../assets/mural/cement/Cement3.jpg";
import Cement4 from "../../assets/mural/cement/Cement4.jpg";
import Cement5 from "../../assets/mural/cement/Cement5.jpg";
import Cement6 from "../../assets/mural/cement/Cement6.jpg";
import Cement7 from "../../assets/mural/cement/Cement7.jpeg";
import Cement8 from "../../assets/mural/cement/Cement8.jpeg";
import Cement9 from "../../assets/mural/cement/Cement9.jpeg";

import POP from "../../assets/mural/pop/POP.jpeg";
import POP1 from "../../assets/mural/pop/POP1.webp";
import POP2 from "../../assets/mural/pop/POP2.jpeg";
import POP3 from "../../assets/mural/pop/POP3.jpg";
import POP4 from "../../assets/mural/pop/POP4.jpeg";
import POP5 from "../../assets/mural/pop/POP5.jpg";
import POP6 from "../../assets/mural/pop/POP6.jpg";
import POP7 from "../../assets/mural/pop/POP7.jpg";
import POP8 from "../../assets/mural/pop/POP8.jpg";
import POP9 from "../../assets/mural/pop/POP9.jpg";

import Buddha from "../../assets/mural/buddha/Buddha.jpg";
import Buddha1 from "../../assets/mural/buddha/Buddha1.jpeg";
import Buddha2 from "../../assets/mural/buddha/Buddha2.jpg";
import Buddha3 from "../../assets/mural/buddha/Buddha3.png";
import Buddha4 from "../../assets/mural/buddha/Buddha4.jpg";
import Buddha5 from "../../assets/mural/buddha/Buddha5.webp";
import Buddha6 from "../../assets/mural/buddha/Buddha6.png";
import Buddha7 from "../../assets/mural/buddha/Buddha7.webp";
import Buddha8 from "../../assets/mural/buddha/Buddha8.jpg";
import Buddha9 from "../../assets/mural/buddha/Buddha9.png";
import Buddha10 from "../../assets/mural/buddha/Buddha10.png";

import D from "../../assets/mural/3D/D.jpg";
import D1 from "../../assets/mural/3D/D1.jpg";
import D2 from "../../assets/mural/3D/D2.jpeg";
import D3 from "../../assets/mural/3D/D3.jpg";
import D4 from "../../assets/mural/3D/D4.jpg";
import D5 from "../../assets/mural/3D/D5.jpeg";
import D6 from "../../assets/mural/3D/D6.webp";
import D7 from "../../assets/mural/3D/D7.jpg";
import D8 from "../../assets/mural/3D/D8.jpeg";
import D9 from "../../assets/mural/3D/D9.jpeg";

import Ganesha from "../../assets/mural/ganesha/Ganesha.jpg";
import Ganesha1 from "../../assets/mural/ganesha/Ganesha1.jpg";
import Ganesha2 from "../../assets/mural/ganesha/Ganesha2.jpg";
import Ganesha3 from "../../assets/mural/ganesha/Ganesha3.jpg";
import Ganesha4 from "../../assets/mural/ganesha/Ganesha4.jpg";
import Ganesha5 from "../../assets/mural/ganesha/Ganesha5.jpg";
import Ganesha6 from "../../assets/mural/ganesha/Ganesha6.jpg";
import Ganesha7 from "../../assets/mural/ganesha/Ganesha7.jpeg";
import Ganesha8 from "../../assets/mural/ganesha/Ganesha8.webp";
import Ganesha9 from "../../assets/mural/ganesha/Ganesha9.webp";

import radha1 from "../../assets/mural/radha/radha1.jpeg";
import radha2 from "../../assets/mural/radha/radha2.jpeg";
import radha3 from "../../assets/mural/radha/radha3.jpeg";
import radha4 from "../../assets/mural/radha/radha4.jpg";
import radha5 from "../../assets/mural/radha/radha5.jpeg";
import radha6 from "../../assets/mural/radha/radha6.jpg";
import radha7 from "../../assets/mural/radha/radha7.png";
import radha8 from "../../assets/mural/radha/radha8.webp";
import radha9 from "../../assets/mural/radha/radha9.jpg";
import radha10 from "../../assets/mural/radha/radha10.jpg";
import radha11 from "../../assets/mural/radha/radha11.png";
import radha12 from "../../assets/mural/radha/radha12.webp";

import wall from "../../assets/mural/wall/wall (1).jpeg";
import wall1 from "../../assets/mural/wall/wall (1).jpg";
import wall2 from "../../assets/mural/wall/wall (1).webp";
import wall3 from "../../assets/mural/wall/wall (2).jpeg";
import wall4 from "../../assets/mural/wall/wall (2).jpg";
import wall5 from "../../assets/mural/wall/wall (3).jpeg";
import wall6 from "../../assets/mural/wall/wall (3).jpg";
import wall7 from "../../assets/mural/wall/wall (4).jpeg";
import wall8 from "../../assets/mural/wall/wall (4).jpeg";
import wall9 from "../../assets/mural/wall/wall (5).jpg";
import wall10 from "../../assets/mural/wall/wall (6).jpg";
import wall11 from "../../assets/mural/wall/wall (7).jpg";
import wall12 from "../../assets/mural/wall/wall (8).jpg";

import floral1 from "../../assets/mural/Floral Wall Mural Designs/floral (1).jpg"
import floral2 from "../../assets/mural/Floral Wall Mural Designs/floral (1).webp"
import floral3 from "../../assets/mural/Floral Wall Mural Designs/floral (2).jpg"
import floral4 from "../../assets/mural/Floral Wall Mural Designs/floral (2).webp"
import floral5 from "../../assets/mural/Floral Wall Mural Designs/floral (3).jpg"
import floral6 from "../../assets/mural/Floral Wall Mural Designs/floral (3).webp"
import floral7 from "../../assets/mural/Floral Wall Mural Designs/floral (4).jpg"
import floral8 from "../../assets/mural/Floral Wall Mural Designs/floral (4).webp"
import floral9 from "../../assets/mural/Floral Wall Mural Designs/floral (5).jpg"
import floral10 from "../../assets/mural/Floral Wall Mural Designs/floral (6).jpg"

import fiber1 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (1).jpeg'
import fiber2 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (1).jpg'
import fiber3 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (2).jpg'
import fiber4 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (3).jpg'
import fiber5 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (4).jpg'
import fiber6 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (5).jpg'
import fiber7 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (6).jpg'
import fiber8 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (7).jpg'
import fiber9 from '../../assets/mural/Fiber Wall Mural/fiber wall mural (8).jpg'

import sculpture1 from '../../assets/mural/Fiber Sculpture/sculpture (1).avif'
import sculpture2 from '../../assets/mural/Fiber Sculpture/sculpture (1).jpeg'
import sculpture3 from '../../assets/mural/Fiber Sculpture/sculpture (1).jpg'
import sculpture4 from '../../assets/mural/Fiber Sculpture/sculpture (1).webp'
import sculpture5 from '../../assets/mural/Fiber Sculpture/sculpture (2).jpg'
import sculpture6 from '../../assets/mural/Fiber Sculpture/sculpture (2).webp'
import sculpture7 from '../../assets/mural/Fiber Sculpture/sculpture (3).jpg'
import sculpture8 from '../../assets/mural/Fiber Sculpture/sculpture (4).jpg'
import sculpture9 from '../../assets/mural/Fiber Sculpture/sculpture (5).jpg'
import sculpture10 from '../../assets/mural/Fiber Sculpture/sculpture (6).jpg'
import sculpture11 from '../../assets/mural/Fiber Sculpture/sculpture (7).jpg'

import fiberstatue1 from '../../assets/mural/Fiber Statue/fiber statue (1).avif'
import fiberstatue2 from '../../assets/mural/Fiber Statue/fiber statue (1).jpeg'
import fiberstatue3 from '../../assets/mural/Fiber Statue/fiber statue (1).jpg'
import fiberstatue4 from '../../assets/mural/Fiber Statue/fiber statue (1).webp'
import fiberstatue5 from '../../assets/mural/Fiber Statue/fiber statue (2).jpeg'
import fiberstatue6 from '../../assets/mural/Fiber Statue/fiber statue (2).jpg'
import fiberstatue7 from '../../assets/mural/Fiber Statue/fiber statue (2).webp'
import fiberstatue8 from '../../assets/mural/Fiber Statue/fiber statue (3).webp'
import fiberstatue9 from '../../assets/mural/Fiber Statue/fiber statue (4).webp'

import fiberwallsculpture1 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (1).jpeg'
import fiberwallsculpture2 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (1).jpg'
import fiberwallsculpture3 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (2).jpg'
import fiberwallsculpture4 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (3).jpg'
import fiberwallsculpture5 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (4).jpg'
import fiberwallsculpture6 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (5).jpg'
import fiberwallsculpture7 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (6).jpg'
import fiberwallsculpture8 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (7).jpg'
import fiberwallsculpture9 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (8).jpg'
import fiberwallsculpture10 from '../../assets/mural/Fiber Wall Sculpture/wall sculpture (9).jpg'

import fiberwallart1 from '../../assets/mural/Fiber Wall Art/fiber wall (1).jpeg'
import fiberwallart2 from '../../assets/mural/Fiber Wall Art/fiber wall (1).jpg'
import fiberwallart3 from '../../assets/mural/Fiber Wall Art/fiber wall (1).webp'
import fiberwallart4 from '../../assets/mural/Fiber Wall Art/fiber wall (2).jpeg'
import fiberwallart5 from '../../assets/mural/Fiber Wall Art/fiber wall (2).jpg'
import fiberwallart6 from '../../assets/mural/Fiber Wall Art/fiber wall (3).jpeg'
import fiberwallart7 from '../../assets/mural/Fiber Wall Art/fiber wall (3).jpg'
import fiberwallart8 from '../../assets/mural/Fiber Wall Art/fiber wall (4).jpeg'
import fiberwallart9 from '../../assets/mural/Fiber Wall Art/fiber wall (5).jpeg'
import fiberwallart10 from '../../assets/mural/Fiber Wall Art/fiber wall (6).jpeg'
import fiberwallart11 from '../../assets/mural/Fiber Wall Art/fiber wall (7).jpeg'

import lippan1 from '../../assets/mural/Lippan Art/lippan (1).jpg'
import lippan2 from '../../assets/mural/Lippan Art/lippan (1).webp'
import lippan3 from '../../assets/mural/Lippan Art/lippan (2).jpg'
import lippan4 from '../../assets/mural/Lippan Art/lippan (3).jpg'
import lippan5 from '../../assets/mural/Lippan Art/lippan (4).jpg'
import lippan6 from '../../assets/mural/Lippan Art/lippan (5).jpg'
import lippan7 from '../../assets/mural/Lippan Art/lippan (6).jpg'
import lippan8 from '../../assets/mural/Lippan Art/lippan (7).jpg'
import lippan9 from '../../assets/mural/Lippan Art/lippan (8).jpg'

import sec1image from '../../assets/schoolpainting/school-painting-mural1.jpg'
import sec2image from '../../assets/WallDecors/Wall-Painting.jpg'
import sec3image from '../../assets/mural/drywall-art-pop-art.jpg'

export const sections = [
  {
    title: "Kindergarten School Wall Art",
    mainImage: Kindergarten,
    thumbnails: [
      Kindergarten,
      Kindergarten1,
      Kindergarten2,
      Kindergarten3,
      Kindergarten4,
      Kindergarten5,
      Kindergarten6,
      Kindergarten7,
    ],
    text: (
      <>
        Kindergarten School Wall Art turns the learning space into a <strong>world of imagination and joy</strong>.
        Every wall bursts with color, characters, and playful designs that invite children to explore,
        dream, and discover. These visuals make the classroom feel like a storybook come alive.
        <br /><br />
        The murals feature <strong>alphabets, animals, numbers, shapes, and nature scenes</strong> designed to
        build foundational learning through fun. By combining art with education, children grasp new concepts
        effortlessly while staying curious and attentive.
        <br /><br />
        Each painting serves as a <strong>visual teaching aid</strong>, helping children connect images with
        words, ideas, and experiences. The environment becomes a silent teacher—guiding them toward
        early literacy, cognitive growth, and emotional development. Beyond academics, the art fosters <strong>social and moral values</strong> such as kindness, sharing, and teamwork.
        Scenes of friendship, family, and nature remind children of empathy and respect for one another,
        nurturing both heart and mind.
        <br /><br />
        The bright colors and engaging characters also create a <strong>positive emotional atmosphere</strong>.
        They reduce fear or anxiety, helping children feel safe and excited to come to school every day.
        A cheerful setting inspires laughter, confidence, and curiosity.
      </>
    ),
    fullImage:sec1image
  },
  {
    title: "Government School Wall Art",
    mainImage: Government,
    thumbnails: [
      Government,
      Government1,
      Government2,
      Government3,
      Government4,
      Government5,
      Government6,
      Government7,
    ],
    text: (
      <>
        Government School Wall Art transforms dull spaces into{" "}
        <strong>vibrant learning environments</strong>. It connects education with
        creativity through colorful visuals that capture student interest and
        encourage curiosity.
        <br />
        <br />
        Each mural carries an educational message—covering{" "}
        <strong>science, history, culture, and moral values</strong>. These
        illustrations help reinforce classroom lessons and make concepts easier to
        understand for every child.
        <br />
        <br />
        The walls also highlight <strong>national symbols, leaders, and civic
          values</strong>, inspiring students to respect their heritage and take
        pride in their community. They promote unity and awareness through art.
        <br />
        <br />
        Ultimately, government school wall art acts as a{" "}
        <strong>silent teacher</strong>—motivating students daily to dream bigger,
        think creatively, and grow into responsible citizens through an engaging
        visual experience.
      </>
    ),
  },
  {
    title: "High School Wall Art",
    mainImage: HighSchool1,
    thumbnails: [HighSchool, HighSchool1, HighSchool2, HighSchool3, HighSchool4, HighSchool5, HighSchool6],
    text: (
      <>
        In high schools, <strong>bold wall art</strong> empowers adolescents
        with visuals that resonate with their evolving identities. From
        motivational quotes by historical figures to abstract representations
        of future careers and global challenges, these designs{" "}
        <strong>inspire ambition and critical thinking</strong>.
        <br />
        <br />
        These impactful murals serve as <strong>daily reminders</strong>,
        fostering <strong>resilience, diversity appreciation, and academic
          drive</strong> by depicting success stories, scientific breakthroughs,
        and social justice themes.
        <br />
        <br />
        By weaving in school-specific elements like{" "}
        <strong>subject icons or alumni achievements</strong>, the walls become{" "}
        <strong>personalized motivators</strong>, encouraging deeper engagement
        with curriculum and extracurriculars.
        <br />
        <br />
        Moreover, they cultivate a sense of <strong>belonging</strong>,
        mitigating peer pressure through inclusive imagery that celebrates{" "}
        <strong>individuality and collective potential</strong>.
        <br />
        <br />
        In summary, high school wall art is a{" "}
        <strong>catalyst for growth</strong>, turning corridors and classrooms
        into galleries of empowerment where teens envision and pursue their
        brightest futures.
      </>
    ),
  },
  {
    title: "Library Wall Art",
    mainImage: Library,
    thumbnails: [Library, Library1, Library2, Library3, Library4, Library5, Library6, Library7, Library8],
    text: (
      <>
        In school libraries, <strong>evocative wall art</strong> cultivates a love for <strong>reading and knowledge</strong>. Illustrated with bookish landscapes, famous literary characters, and pathways to worlds unknown, these paintings invite quiet exploration and imagination.
        <br /><br />
        More than ornamentation, they function as <strong>subtle librarians</strong>, highlighting genres, authors, and themes to guide young readers toward their next adventure.
        <br /><br />
        Integrating quotes from classics and visual metaphors for research journeys, the walls transform the space into an <strong>immersive narrative environment</strong> that encourages prolonged stays and deeper dives into texts.
        <br /><br />
        They also promote <strong>tranquility and focus</strong>, with serene designs that soothe the mind and enhance concentration amid stacks of stories.
        <br /><br />
        Essentially, library wall art breathes life into literacy, making the pursuit of books an <strong>artistic odyssey</strong> that enriches minds and souls alike.
      </>
    ),
  },
  {
    title: "Play Area Wall Art",
    mainImage: PlayArea,
    thumbnails: [PlayArea, PlayArea1, PlayArea2, PlayArea3, PlayArea4, PlayArea5, PlayArea6, PlayArea7, PlayArea8],
    text: (
      <>
        In play areas, <strong>exuberant wall paintings</strong> turn recreation into a riot of <strong>color and fantasy</strong>. Depicting whimsical jungles, underwater realms, and superhero escapades, these artworks fuel <strong>physical activity and social play</strong> with boundless energy.
        <br /><br />
        These lively murals are <strong>active participants in fun</strong>, prompting games, role-play, and imaginative scenarios that build <strong>motor skills, teamwork, and emotional expression</strong>.
        <br /><br />
        Through vibrant depictions of nature cycles, friendship tales, and adventure maps, the walls guide <strong>unstructured play</strong> into enriching experiences that teach subtly through joy.
        <br /><br />
        They create <strong>safe, stimulating zones</strong> that boost confidence, reduce conflicts, and amplify laughter in every leap and tumble.
        <br /><br />
        At heart, play area wall paintings are the <strong>architects of childhood delight</strong>, where every stroke invites movement, mirth, and memorable moments of pure play.
      </>
    ),
  },
  {
    title: "Play School Wall Art",
    mainImage: PlaySchool,
    thumbnails: [PlaySchool, PlaySchool1, PlaySchool2, PlaySchool3, PlaySchool4, PlaySchool5, PlaySchool6, PlaySchool7, PlaySchool8],
    text: (
      <>
        In the play school, <strong>enchanting wall paintings</strong> transform the environment into a <strong>magical world of imagination and discovery</strong>. Every wall tells a story — from colorful alphabets and playful animals to fairy-tale landscapes and space adventures — creating an atmosphere where learning feels like play.
        <br /><br />
        These vibrant murals are not just decorative; they act as <strong>visual educators</strong>, sparking curiosity and reinforcing concepts like <strong>numbers, shapes, colors, and good habits</strong> in a fun, engaging manner. The cheerful characters invite children into a world of creativity, encouraging them to explore, question, and express themselves freely.
        <br /><br />
        By integrating educational themes into art, such as <strong>maps, nature scenes, and cultural stories</strong>, the walls become <strong>interactive learning tools</strong>, helping children absorb knowledge naturally through observation and imagination.
        <br /><br />
        Beyond learning, these paintings foster a <strong>positive emotional environment</strong>, reducing anxiety and helping children feel safe, happy, and inspired. They transform ordinary classrooms and corridors into dynamic learning spaces, where each corner promotes joy, exploration, and cognitive growth.
        <br /><br />
        In essence, the wall paintings at the play school serve as <strong>silent teachers — nurturing creativity, enhancing memory, and supporting early childhood development</strong> through the power of color and art. Every brushstroke adds to the story of a place where education meets enchantment, and where every day is an adventure in learning.
      </>
    ),
  },
  {
    title: "Science & Computer Lab Wall Art",
    mainImage: ScienceComputer,
    thumbnails: [ScienceComputer, ScienceComputer1, ScienceComputer2, ScienceComputer3, ScienceComputer4, ScienceComputer5, ScienceComputer6, ScienceComputer7, ScienceComputer8],
    text: (
      <>
        In science and computer labs, <strong>futuristic wall art</strong> demystifies complex subjects with <strong>visual innovation</strong>. Illustrating molecular structures, coding algorithms, and cosmic phenomena, these designs make <strong>abstract ideas tangible and exciting</strong>.
        <br /><br />
        These intelligent murals double as <strong>teaching aids</strong>, facilitating explanations of experiments, data flows, and digital ethics through diagrammatic storytelling and inspirational scientist portraits.
        <br /><br />
        Incorporating interactive elements like <strong>QR-linked facts</strong> or <strong>periodic table murals</strong>, the walls bridge theory and practice, urging <strong>hands-on inquiry and computational thinking</strong>.
        <br /><br />
        They instill a culture of <strong>curiosity and perseverance</strong>, with motifs of discovery that remind students of failures turned triumphs in the pursuit of knowledge.
        <br /><br />
        Fundamentally, lab wall art is the <strong>spark of scientific passion</strong>, converting sterile spaces into laboratories of wonder where <strong>innovation ignites</strong> and <strong>futures in STEM</strong> are forged.
      </>
    ),
  },
  {
    title: "School Compound Wall Art",
    mainImage: Compound,
    thumbnails: [Compound, Compound1, Compound2, Compound3, Compound4, Compound5, Compound6, Compound7, Compound8, Compound9],
    text: (
      <>
        Around school compounds, <strong>expansive wall paintings</strong> declare <strong>identity and inspiration</strong> to the community. Featuring school mottos, historical milestones, and aspirational landscapes, these outdoor murals foster <strong>pride and a welcoming vibe</strong>.
        <br /><br />
        More than boundaries, they serve as <strong>public billboards</strong> for values like <strong>unity, excellence, and sustainability</strong>, engaging passersby in the school's ethos.
        <br /><br />
        Through weather-resistant designs of sports triumphs, eco-messages, and cultural heritage, the walls extend learning beyond gates, promoting <strong>dialogue and reflection</strong>.
        <br /><br />
        They enhance <strong>security perception</strong> while beautifying perimeters, turning fences into <strong>canvases of communal aspiration</strong>.
        <br /><br />
        Ultimately, compound wall paintings are the school's <strong>open-air manifesto</strong>, painting a picture of <strong>progress and belonging</strong> that resonates far beyond the playground.
      </>
    ),
  },
];


export const sections2 = [
  {
    title: "Wall Mural Relief Art",
    image: WallRelief,
    mainImage: WallRelief,
    thumbnails: [WallRelief, WallRelief1, WallRelief2, WallRelief3, WallRelief4, WallRelief5, WallRelief6, WallRelief7, WallRelief8, WallRelief9, WallRelief10],
    text: <>
      Wall murals and relief art blend flat and sculpted dimensions to create <strong>depth-filled narratives</strong> on surfaces. Combining painted scenes with <strong>raised textures</strong>, these hybrid works evoke emotion and tactility, ideal for storytelling spaces.<br /><br />
      This art form transcends traditional painting by adding dimensional layers — embossed figures, foliage, or architectural motifs — that invite <strong>touch</strong> and closer inspection, enhancing sensory engagement.<br /><br />
      Crafted for interiors or exteriors, they depict <strong>epics, abstracts, or personal tales</strong>, using materials like plaster or resin for durability and drama.<br /><br />
      Relief elements amplify <strong>light and shadow play</strong>, making walls dynamic with the day's mood, while murals provide vivid color backdrops.<br /><br />
      In fusion, wall mural and relief art turns static surfaces into <strong>living sculptures</strong>, where vision and touch converge to inspire awe and introspection.
    </>,
        fullImage:sec3image

  },
   {
    title: "Buddha Wall Mural",
    image: Buddha3,
    mainImage: Buddha3,
    thumbnails: [Buddha, Buddha1, Buddha2, Buddha3, Buddha4, Buddha5, Buddha6, Buddha7, Buddha8, Buddha9, Buddha10],
    text: <>
      Buddha wall murals evoke <strong>tranquility, mindfulness, and timeless spirituality</strong>, transforming walls into meditative sanctuaries that radiate calm and inner balance. Rooted in sacred art traditions, they blend serene symbolism with contemporary aesthetics for spaces that breathe peace.<br /><br />
      Crafted through <strong>textured reliefs, gold leaf detailing, or soft gradient washes</strong>, these murals capture the Buddha’s tranquil expressions and enlightened presence. Each contour, gesture, and gaze is designed to dissolve chaos, inviting stillness and contemplation.<br /><br />
      Whether hand-painted, etched in <strong>cement, metal, or FRP fiberglass</strong>, or digitally rendered for modern interiors, Buddha murals harmonize art and architecture. Their subtle luminosity — muted golds, earthy tones, and gentle highlights — creates an atmosphere of sacred warmth and quiet luxury.<br /><br />
      Ideal for <strong>homes, spas, meditation studios, or hospitality spaces</strong>, they offer a focal point that transcends décor, becoming a visual mantra of serenity and strength.<br /><br />
      A Buddha wall mural is not merely an artwork — it’s a <strong>spiritual presence on the wall</strong>, merging beauty and belief into a timeless reminder of peace, compassion, and awakening.
    </>

  },
  {
    title: "3D Wall Mural",
    image: D,
    mainImage: D,
    thumbnails: [D, D1, D2, D3, D4, D5, D6, D7, D8, D9],
    text: <>
      3D wall murals redefine dimensional artistry, transforming flat surfaces into <strong>immersive sculptural experiences</strong>. These creations merge design, depth, and illusion to make walls appear alive — extending, folding, and reaching into the viewer’s space.<br /><br />
      Through techniques like <strong>bas-relief carving, layered panels, resin casting, or digital 3D rendering</strong>, they capture shadows, highlights, and tactile contours that react dynamically to light and movement. Each piece becomes a living interface between architecture and imagination.<br /><br />
      Whether fashioned from <strong>FRP fiberglass, metal, cement, or high-density composites</strong>, 3D murals combine strength with detail — engineered to last while showcasing fluid form and artistic precision.<br /><br />
      Ideal for <strong>corporate lobbies, hospitality interiors, residences, or public facades</strong>, these murals serve as spatial anchors, blurring the boundary between art and environment. They invite interaction — not just to be seen, but to be felt.<br /><br />
      A 3D wall mural is more than decoration; it’s a <strong>dialogue between material and dimension</strong>, where light sculpts form and perception becomes part of the artwork itself — bold, tactile, and endlessly engaging.
    </>

  },
    {
    title: "Ganesha Wall Mural",
    image: Ganesha,
    mainImage: Ganesha,
    thumbnails: [Ganesha, Ganesha1, Ganesha2, Ganesha3, Ganesha4, Ganesha5, Ganesha6, Ganesha7, Ganesha8, Ganesha9],
    text: <>
      Ganesha wall murals embody <strong>wisdom, prosperity, and auspicious beginnings</strong>, transforming any wall into a divine focal point of spiritual grace. Lord Ganesha — the remover of obstacles and harbinger of success — is depicted with serene majesty and symbolic depth, uniting sacred tradition with contemporary design.<br /><br />
      Crafted through <strong>intricate carvings, embossed reliefs, metallic leafing, or hand-painted detailing</strong>, these murals capture the deity’s benevolent expression, flowing ornaments, and sacred motifs. Each line and contour resonates with positive energy, inviting harmony, intellect, and abundance into the space.<br /><br />
      Whether sculpted in <strong>FRP fiberglass, cement, wood, or metal</strong>, or rendered as digital art for modern interiors, Ganesha murals adapt beautifully across styles — from minimalist elegance to ornate grandeur. Their golden hues, earthy textures, and radiant finishes reflect devotion while maintaining aesthetic sophistication.<br /><br />
      Perfect for <strong>homes, temples, offices, or hospitality environments</strong>, these murals infuse spaces with calm confidence and divine inspiration, serving as both a visual blessing and an artistic centerpiece.<br /><br />
      A Ganesha wall mural is more than an artwork — it’s a <strong>sacred invocation in form</strong>, merging craftsmanship, culture, and spirituality to create an atmosphere of peace, protection, and prosperity.
    </>


  },
  {
    title: "Radhakrishna Wall Mural",
    image: radha11,
    mainImage: radha11,
    thumbnails: [radha1, radha2, radha3, radha4, radha5, radha6, radha7, radha8, radha9, radha10,
      radha11, radha12
    ],
    text: <>
      3D wall murals redefine dimensional artistry, transforming flat surfaces into <strong>immersive sculptural experiences</strong>. These creations merge design, depth, and illusion to make walls appear alive — extending, folding, and reaching into the viewer’s space.<br /><br />
      Through techniques like <strong>bas-relief carving, layered panels, resin casting, or digital 3D rendering</strong>, they capture shadows, highlights, and tactile contours that react dynamically to light and movement. Each piece becomes a living interface between architecture and imagination.<br /><br />
      Whether fashioned from <strong>FRP fiberglass, metal, cement, or high-density composites</strong>, 3D murals combine strength with detail — engineered to last while showcasing fluid form and artistic precision.<br /><br />
      Ideal for <strong>corporate lobbies, hospitality interiors, residences, or public facades</strong>, these murals serve as spatial anchors, blurring the boundary between art and environment. They invite interaction — not just to be seen, but to be felt.<br /><br />
      A 3D wall mural is more than decoration; it’s a <strong>dialogue between material and dimension</strong>, where light sculpts form and perception becomes part of the artwork itself — bold, tactile, and endlessly engaging.
    </>

  },
   {
    title: "Fiber Wall Mural",
    image: wall,
    mainImage: fiber3,
    thumbnails: [fiber1, fiber2, fiber3, fiber4, fiber5, fiber6, fiber7, fiber8, fiber9],
    text: <>
      Fiber wall murals are a <strong>fusion of modern engineering and artistic creativity</strong>, crafted with precision using advanced fiberglass materials. They offer lightweight strength and exceptional surface detail, ideal for both indoor and outdoor use.<br /><br />
      Each mural is sculpted or cast to achieve <strong>layered depth, texture, and visual rhythm</strong>, transforming ordinary walls into statement pieces of contemporary design.<br /><br />
      Designed with <strong>FRP (Fiberglass Reinforced Plastic)</strong>, these murals resist weathering, moisture, and impact — making them suitable for long-lasting architectural beauty.<br /><br />
      Ideal for <strong>corporate exteriors, villas, art galleries, and hospitality spaces</strong>, fiber murals embody modern artistry rooted in structural innovation.<br /><br />
      A fiber wall mural stands as a <strong>symbol of strength and sophistication</strong>, where creativity meets engineering brilliance.
    </>
  },
  {
    title: "Fiber Sculpture",
    image: wall,
    mainImage: fiberwallsculpture3,
    thumbnails: [fiberwallsculpture1, fiberwallsculpture2, fiberwallsculpture3, fiberwallsculpture4, fiberwallsculpture5, fiberwallsculpture6, fiberwallsculpture7, fiberwallsculpture8, fiberwallsculpture9, fiberwallsculpture10],
    text: <>
      Fiber sculptures embody the <strong>essence of modern craftsmanship</strong>, uniting strength, precision, and artistry in every curve. Sculpted from advanced FRP materials, they offer the beauty of traditional art with the endurance of modern technology.<br /><br />
      Each sculpture reflects <strong>fluid motion, organic inspiration, or abstract geometry</strong> — designed to harmonize with the surrounding space.<br /><br />
      With their <strong>lightweight structure, weather resistance, and intricate finish</strong>, fiber sculptures are suited for both indoor and outdoor display.<br /><br />
      Ideal for <strong>public installations, luxury interiors, and architectural landscapes</strong>, they make a timeless artistic statement.<br /><br />
      A fiber sculpture is more than form — it’s a <strong>manifestation of imagination and technical mastery</strong>.
    </>
  },
    {
    title: "Lippan Art",
    image: wall,
    mainImage: lippan8,
    thumbnails: [lippan1, lippan2, lippan3, lippan4, lippan5, lippan6, lippan7, lippan8, lippan9],
    text: <>
      Lippan art, also known as <strong>mud and mirror work</strong>, originates from the heart of Gujarat’s Kutch region — an ancient craft that blends earth, light, and texture.<br /><br />
      Created using <strong>natural clay, mirrors, and intricate hand patterns</strong>, Lippan art reflects traditional Indian artistry with a modern aesthetic appeal.<br /><br />
      Each mural dances with reflections, as light plays across its mirrored surfaces, turning walls into <strong>shimmering mosaics of cultural heritage</strong>.<br /><br />
      Perfect for <strong>residences, cultural centers, art galleries, and boutique interiors</strong>, Lippan art celebrates rustic beauty and handcrafted charm.<br /><br />
      A Lippan wall piece is not just a design — it’s a <strong>living echo of tradition and texture</strong>, connecting contemporary spaces to timeless roots.
    </>
  },
  {
    title: "Drywall Art",
    image: Drywall,
    mainImage: Drywall,
    thumbnails: [Drywall, Drywall1, Drywall2, Drywall3, Drywall4, Drywall5, Drywall6, Drywall7],
    text: <>
      Drywall art innovates on gypsum panels, carving and painting directly onto these modern backbones for <strong>seamless, built-in masterpieces</strong>. This technique embeds creativity within construction, eliminating frames for immersive wall experiences.<br /><br />
      By scoring, layering, and tinting drywall, artists achieve subtle textures and illusions — from <strong>minimalist lines</strong> to <strong>organic waves</strong> — that harmonize with contemporary architecture.<br /><br />
      Perfect for homes or offices, it withstands time without fading, offering <strong>low-maintenance elegance</strong> that evolves with lighting.<br /><br />
      The raw, industrial edge of drywall grounds abstract expressions, making art feel integral rather than added-on.<br /><br />
      Drywall art redefines boundaries, proving everyday materials can host extraordinary visions, blending craft with habitat effortlessly.
    </>
  },
  {
    title: "Elevation Mural Design",
    image: Elevation,
    mainImage: Elevation,
    thumbnails: [Elevation, Elevation1, Elevation2, Elevation3, Elevation4, Elevation5, Elevation6, Elevation7, Elevation8, Elevation9],
    text: <>
      Elevation mural designs revitalize building facades, turning vertical planes into bold statements of <strong>identity</strong> and <strong>narrative</strong>. These large-scale exteriors feature panoramic vistas, urban motifs, or branded icons that dialogue with the skyline.<br /><br />
      Strategically placed on high-rises or low-rises, they enhance architectural flow, using <strong>weatherproof paints</strong> and scalable techniques for visibility and vibrancy from afar.<br /><br />
      Thematic choices — from historical homages to futuristic visions — engage pedestrians and drivers, fostering community pride or commercial allure.<br /><br />
      Illusions of <strong>depth or movement</strong> add dynamism, making static structures pulse with life against urban rhythms.<br /><br />
      Elevation murals are <strong>skyline poets</strong>, scripting stories across heights to connect buildings with their human stories below.
    </>
  },
  {
    title: "Cement Wall Mural",
    image: Cement,
    mainImage: Cement,
    thumbnails: [Cement, Cement1, Cement2, Cement3, Cement4, Cement5, Cement6, Cement7, Cement8, Cement9],
    text: <>
      Cement wall mural harnesses raw concrete's grit for <strong>industrial-chic expressions</strong>, etching and staining to reveal layered histories on unyielding surfaces. This durable medium suits urban lofts, factories, or street art, where toughness meets artistry.<br /><br />
      Techniques like <strong>acid etching</strong>, trowel texturing, and integral coloring infuse permanence, capturing graffiti vibes or geometric precision without fragility.<br /><br />
      Cement's neutrality amplifies bold palettes or monochromatic schemes, aging gracefully to gain patina and character over time.<br /><br />
      It embodies resilience, mirroring the walls' strength while inviting personal imprints that withstand elements and eras.<br /><br />
      Cement murals are testaments to <strong>endurance</strong>, where hard surfaces soften into canvases of rebellion, reflection, and raw beauty.
    </>
  },
  {
    title: "POP Mural",
    image: POP,
    mainImage: POP,
    thumbnails: [POP, POP1, POP2, POP3, POP4, POP5, POP6, POP7, POP8, POP9],
    text: <>
      POP murals ignite spaces with <strong>vibrant energy and cultural flair</strong>, turning blank walls into visual explosions of color, humor, and nostalgia. Rooted in the Pop Art movement, they fuse comic-book dynamism with modern design sensibilities for a look that’s both timeless and rebellious.<br /><br />
      Through <strong>bold lines, halftone patterns, speech bubbles, and iconic imagery</strong>, POP murals celebrate everyday symbols — from vintage ads to pop culture heroes — elevating them into high-impact wall statements that provoke smiles and conversation.<br /><br />
      Whether hand-painted, digitally rendered, or sculpted in <strong>FRP fiberglass</strong> for dimensional depth, POP murals blend 2D illusion with tactile realism. Their glossy hues, high contrast, and exaggerated expressions radiate playfulness while retaining fine-art precision.<br /><br />
      Perfect for <strong>cafés, studios, offices, and public facades</strong>, these murals redefine interiors with unapologetic personality — immersive, cinematic, and irresistibly photogenic. Each panel or brushstroke feels alive, pulsing with rhythm and visual wit.<br /><br />
      A POP mural is more than decoration; it’s a <strong>manifesto of expression</strong> — where modern storytelling, nostalgia, and color collide to shape spaces with magnetic energy and creative joy.
    </>

  },
 
  

  {
    title: "Wall Mural",
    image: wall,
    mainImage: wall,
    thumbnails: [wall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12],
    text: <>
      3D wall murals redefine dimensional artistry, transforming flat surfaces into <strong>immersive sculptural experiences</strong>. These creations merge design, depth, and illusion to make walls appear alive — extending, folding, and reaching into the viewer’s space.<br /><br />
      Through techniques like <strong>bas-relief carving, layered panels, resin casting, or digital 3D rendering</strong>, they capture shadows, highlights, and tactile contours that react dynamically to light and movement. Each piece becomes a living interface between architecture and imagination.<br /><br />
      Whether fashioned from <strong>FRP fiberglass, metal, cement, or high-density composites</strong>, 3D murals combine strength with detail — engineered to last while showcasing fluid form and artistic precision.<br /><br />
      Ideal for <strong>corporate lobbies, hospitality interiors, residences, or public facades</strong>, these murals serve as spatial anchors, blurring the boundary between art and environment. They invite interaction — not just to be seen, but to be felt.<br /><br />
      A 3D wall mural is more than decoration; it’s a <strong>dialogue between material and dimension</strong>, where light sculpts form and perception becomes part of the artwork itself — bold, tactile, and endlessly engaging.
    </>

  },
  {
    title: "Floral Wall Mural Designs",
    image: wall,
    mainImage: floral7,
    thumbnails: [floral1, floral2, floral3, floral4, floral5, floral6, floral7, floral8, floral9, floral10],
    text: <>
      Floral wall murals capture the <strong>grace and vitality of nature</strong>, transforming interiors into blooming sanctuaries. Every petal, leaf, and vine tells a story — hand-crafted to create a sense of freshness and serenity.<br /><br />
      With <strong>hand-painted details, embossed textures, and layered 3D petals</strong>, these designs breathe life into flat walls, evoking the softness and elegance of real blossoms. Their delicate patterns interact beautifully with light, adding depth and tranquility.<br /><br />
      Made from <strong>FRP, resin, or plaster composites</strong>, these murals combine durability with fine craftsmanship, ensuring beauty that endures through time.<br /><br />
      Perfect for <strong>residences, hotel lobbies, spas, and boutique spaces</strong>, floral wall murals bring the calm rhythm of nature indoors — elegant, organic, and endlessly inspiring.<br /><br />
      A floral mural is more than a decoration; it’s a <strong>living portrait of growth and renewal</strong>, where art and nature coexist in perfect harmony.
    </>
  },
 
  {
    title: "Fiber Wall Sculpture",
    image: wall,
    mainImage: sculpture10,
    thumbnails: [sculpture1, sculpture2, sculpture3, sculpture4, sculpture5, sculpture6, sculpture7, sculpture8, sculpture9, sculpture10, sculpture11],
    text: <>
      Fiber wall sculptures turn plain walls into <strong>architectural art installations</strong>, balancing sculptural depth with lightweight precision. Each design captures motion and emotion in form, texture, and silhouette.<br /><br />
      Created through <strong>FRP molding, carving, and textural layering</strong>, these sculptures add dimension and tactile beauty to any surface.<br /><br />
      They are exceptionally durable — <strong>weather-resistant, corrosion-proof, and easy to maintain</strong> — making them perfect for long-term architectural integration.<br /><br />
      Ideal for <strong>modern interiors, hotels, cultural centers, and exterior façades</strong>, these pieces elevate spatial character with expressive form.<br /><br />
      A fiber wall sculpture is not just décor; it’s a <strong>dialogue of light, shadow, and craftsmanship</strong> — redefining wall design with artistic precision.
    </>
  },
  {
    title: "Fiber Wall Art",
    image: wall,
    mainImage: fiberwallart2,
    thumbnails: [fiberwallart1, fiberwallart2, fiberwallart3, fiberwallart4, fiberwallart5, fiberwallart6, fiberwallart7, fiberwallart8, fiberwallart9, fiberwallart10, fiberwallart11],
    text: <>
      Fiber wall art merges <strong>innovation with imagination</strong>, offering a versatile canvas for modern architectural expression. Designed in FRP and mixed media, each piece tells a visual story through sculptural finesse and texture.<br /><br />
      Artists experiment with <strong>geometric reliefs, organic curves, or abstract motifs</strong>, bringing depth and individuality to any wall.<br /><br />
      The <strong>lightweight yet durable nature of fiberglass</strong> ensures easy installation and longevity, even in high-traffic environments.<br /><br />
      Perfect for <strong>luxury residences, corporate offices, restaurants, and galleries</strong>, fiber wall art redefines decorative sophistication.<br /><br />
      Every composition is a <strong>fusion of art and architecture</strong> — minimal yet expressive, subtle yet striking.
    </>
  },
  
  {
    title: "Fiber Statue",
    image: wall,
    mainImage: fiberstatue1,
    thumbnails: [fiberstatue1, fiberstatue2, fiberstatue3, fiberstatue4, fiberstatue5, fiberstatue6, fiberstatue7, fiberstatue8, fiberstatue9],
    text: <>
      Fiber statues bring <strong>life, character, and storytelling</strong> into any environment. Crafted from FRP materials, they combine traditional sculptural artistry with modern durability.<br /><br />
      Each figure is <strong>hand-finished with realistic textures and artistic precision</strong>, capturing emotion and movement in form.<br /><br />
      Resistant to <strong>weather, moisture, and wear</strong>, these statues are perfect for indoor and outdoor use — from heritage recreations to contemporary masterpieces.<br /><br />
      Ideal for <strong>temples, gardens, resorts, and cultural venues</strong>, they embody beauty and endurance.<br /><br />
      A fiber statue represents the <strong>union of art and permanence</strong> — storytelling cast in sculptural elegance.
    </>
  },


];


export const sections3 = [
  {
    title: "Wall Art",
    image: WallArt6,
    mainImage: WallArt6,
    thumbnails: [
      WallArt1,
      WallArt2,
      WallArt3,
      WallArt4,
      WallArt5,
      WallArt6,
      WallArt7,
      WallArt8,
      WallArt9,

    ],
    text: <>
      Wall painting elevates interiors with <strong>bespoke strokes</strong> that personalize spaces, from subtle accents to <strong>statement murals</strong> that redefine room dynamics. This timeless craft adapts to any style, infusing personality through color, pattern, and theme.<br /><br />
      Expert layering ensures longevity, with <strong>primers and finishes</strong> that guard against wear while allowing creative freedom — geometric abstracts, florals, or scenic vistas.<br /><br />
      It transforms mundane walls into <strong>focal points</strong>, harmonizing with furniture and lighting for cohesive atmospheres that soothe or energize.<br /><br />
      Versatile for DIY touches or professional executions, wall painting democratizes design, making high art accessible.<br /><br />
      At its core, wall painting is <strong>intimate alchemy</strong>, turning blank expanses into echoes of the inhabitant's soul and story.
    </>,
        fullImage:sec2image

  },
  {
    title: "3D Wall Art",
    image: dwallart2,
    mainImage: dwallart2,
    thumbnails: [
      dwallart1,
      dwallart2,
      dwallart3,
      dwallart4,
      dwallart5,
      dwallart6,
      dwallart7,
      dwallart8,
      dwallart9,

    ],
    text: <>
      3D wall painting defies flatness, employing <strong>trompe-l'oeil illusions</strong> to thrust scenes from surfaces, creating optical adventures that startle and delight. This advanced technique crafts waterfalls cascading into rooms or forests encroaching on floors.<br /><br />
      Meticulous shading and perspective bend reality, turning bedrooms into <strong>ocean depths</strong> or hallways into infinite voids, engaging viewers kinesthetically.<br /><br />
      Ideal for accent walls, it amplifies small spaces visually, adding drama without physical addition.<br /><br />
      From playful kids' realms to sophisticated entry illusions, 3D art invites interaction, blurring art and architecture.<br /><br />
      3D wall painting is <strong>dimensional wizardry</strong>, projecting fantasies onto plaster to expand worlds within walls.
    </>,
  },

  {
    title: "Hospitals and Clinics Wall Painting",
    image: hospital6,
    mainImage: hospital6,
    thumbnails: [
      hospital1,
      hospital2,
      hospital3,
      hospital4,
      hospital5,
      hospital6,
      hospital7,
      hospital8,
      hospital9,

    ],
    text: <>
      In hospitals and clinics, <strong>therapeutic wall painting</strong> heals visually, deploying serene seascapes, botanical motifs, or abstract calms to mitigate stress and aid recovery. Evidence-based palettes reduce anxiety, promoting <strong>healing environments</strong>.<br /><br />
      Custom designs in waiting areas or patient rooms incorporate <strong>nature proxies</strong>—forests, waves—for biophilic benefits that lower blood pressure and enhance mood.<br /><br />
      Durable, <strong>antimicrobial finishes</strong> ensure hygiene, while subtle messaging of hope reinforces positivity amid vulnerability.<br /><br />
      From pediatric whimsy to geriatric tranquility, it tailors to demographics, fostering comfort in crisis.<br /><br />
      Hospital wall painting is <strong>silent medicine</strong>, coloring care spaces with compassion to complement clinical cure.
    </>
  },
  {
    title: "Hotels & Restaurants Wall Painting",
    image: hotel3,
    mainImage: hotel3,
    thumbnails: [
      hotel1,
      hotel2,
      hotel3,
      hotel4,
      hotel5,
      hotel6,
      hotel7,
      hotel8,
      hotel9,
    ],
    text: <>
      Hotels and restaurants thrive on wall painting that sets <strong>ambiance</strong>, from opulent damasks in lobbies to rustic vignettes in dining nooks, curating experiences that linger in memory. Thematic cohesion elevates guest immersion, boosting satisfaction.<br /><br />
      Luxury finishes like <strong>metallics or velvets</strong> add sophistication, while murals narrate local lore, connecting patrons to place.<br /><br />
      Quick-drying formulas minimize downtime, with accent walls spotlighting logos or seasonal motifs for fresh appeal.<br /><br />
      Eco and <strong>low-VOC options</strong> align with hospitality's green ethos, ensuring breathable beauty.<br /><br />
      Wall painting in hospitality is <strong>experiential alchemy</strong>, brushing narratives that dine, dwell, and dream upon.
    </>
  },
  {
    title: "Office Wall Painting",
    image: office4,
    mainImage: office4,
    thumbnails: [
      office1,
      office2,
      office3,
      office4,
      office5,
      office6,
      office7,
      office8,
      office9,

    ],
    text: <>
      Office wall painting optimizes <strong>productivity</strong> through strategic colors—blues for focus, greens for collaboration—while <strong>brand-aligned murals</strong> foster culture and innovation. It demarcates zones subtly, from creative pods to executive enclaves.<br /><br />
      <strong>Acoustic paints</strong> dampen noise, matte finishes reduce glare, creating ergonomic havens that sustain energy through long days.<br /><br />
      Interactive elements like writable surfaces empower brainstorming, turning walls into collaborative canvases.<br /><br />
      Remote-hybrid shifts demand versatile schemes that refresh virtually and viscerally.<br /><br />
      Office wall painting is <strong>corporate canvas</strong>, painting pathways to purpose where work meets wellness and walls whisper motivation.
    </>
  },
  {
    title: "Textured Painting",
    image: Textured1,
    mainImage: Textured1,
    thumbnails: [
      Textured1,
      Textured2,
      Textured3,
      Textured4,
      Textured5,
      Textured6,
      Textured7,
      Textured8,
      Textured9,
    ],
    text: <>
      Textured painting imparts <strong>tactile drama</strong> to walls, using aggregates, sponges, or combs to forge surfaces from stucco ruggedness to silken stipples, adding dimension without demolition. It masks imperfections while amplifying light's caress.<br /><br />
      Versatile for accenting arches or full-room envelopment, textures evoke eras — from Mediterranean roughs to modern metallics — tailored to tactile tastes.<br /><br />
      <strong>Eco-binders</strong> ensure breathability, preventing mold in humid climes, with easy touch-ups for timeless appeal.<br /><br />
      It invites interaction, fingers tracing ridges that soothe or stimulate senses subtly.<br /><br />
      Textured painting is wall's <strong>whisper of wilderness</strong>, sculpting smoothness into stories of touch and time.
    </>
  },
  {
    title: "Liquid Wallpaper",
    image: liquid7,
    mainImage: liquid7,
    thumbnails: [
      liquid1,
      liquid2,
      liquid3,
      liquid4,
      liquid5,
      liquid6,
      liquid7,
      liquid8,


    ],
    text: <>
      Liquid wallpaper flows like paint but clings with plaster's presence, a <strong>cellulose slurry</strong> rolled into velvety, moldable finishes that defy traditional tropes. Self-leveling for seamless coverage, it suits irregular surfaces effortlessly.<br /><br />
      Breathable and <strong>eco-derived</strong>, it regulates humidity, ideal for allergy-prone homes, with metallic or pearlescent additives for subtle sheen.<br /><br />
      Repairable by reapplication—no seams to match—it ages invisibly, customizable with pigments for bespoke beauty.<br /><br />
      From matte neutrals to shimmering sheens, it drapes walls in <strong>liquid luxury</strong> without the weight.<br /><br />
      Liquid wallpaper is <strong>fluid finesse</strong>, pouring artistry onto architecture for coverings that caress and conform.
    </>
  },
  {
    title: "Street Wall Painting",
    image: street6,
    mainImage: street6,
    thumbnails: [
      street1,
      street2,
      street3,
      street4,
      street5,
      street6,
      street7,
      street8,
      street9,

    ],
    text: <>
      Street Wall painting commandeers <strong>urban canvases</strong> for messages that move masses, from ad campaigns to activist cries, wielding aerosol or brush for visibility and voice. Ephemeral or permitted, it dialogues with the city's pulse.<br /><br />
      Bold graphics, stencils, or murals amplify brands or causes, leveraging high-traffic walls for cultural commentary or commercial calls.<br /><br />
      <strong>Weatherfast formulas</strong> endure elements, evolving with graffiti layers into palimpsests of public passion.<br /><br />
      It democratizes art, turning thoroughfares into galleries where walls witness and whisper societal shifts.<br /><br />
      Street wall painting is <strong>urban oratory</strong>, splashing slogans and stories across concrete to provoke, persuade, and perpetuate the street's eternal conversation.
    </>
  },
];


export default function OurProducts() {
const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      console.log(element);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  function slugify(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }
  return (
    <div className="max-w-[100%] mx-auto">
      {/* School Painting */}
      <div className="py-10 px-2 sm:px-4" id="school-painting">
        <h2 className="text-3xl  text-[#272566] mb-2 sm:mb-1"
          style={{
            fontFamily: "'Math'",
            fontWeight: 300
          }}
        >
          School Painting
        </h2>
        <div className="w-full h-[0.5px] bg-gray-300"></div>
      </div>
      <img src={sec1image} className="mb-1" />
      <div className="py-10 sm:px-4" >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((item, index) => {
            const category = "school";
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/product/${category}/${slugify(item.title)}`} className="block overflow-hidden">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    loading="lazy"   // <-- Lazy loading
                    className="w-full h-48 sm:h-56 md:h-64 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <h3 className="text-lg font-medium mt-3 px-4 text-center text-gray-800">
                  {item.title}
                </h3>

                <div className="px-4 mt-auto mb-4">
                  <Link
                    to={`/product/${category}/${slugify(item.title)}`}
                    className="block text-center text-white font-medium text-sm py-2 rounded transition-colors duration-300 bg-[#272566] hover:bg-[#1f2258]"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Wall Mural */}
      <div className="py-10 px-4" id="wall-mural">
        <h2 className="text-3xl  text-[#272566] mb-2 sm:mb-1"
          style={{
            fontFamily: "'Math'",
            fontWeight: 300
          }}
        >Mural and Sculptures</h2>
        <div className="w-full h-[0.5px] bg-gray-300 "></div>
        </div>
        <img src={sec3image} className="mb-1" />
      <div className="py-10 px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections2.map((item, index) => {
            const category = "mural";
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/product/${category}/${slugify(item.title)}`} className="block overflow-hidden">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <h3 className="text-lg font-medium mt-3 px-4 text-center text-gray-800">
                  {item.title}
                </h3>

                <div className="px-4 mt-auto mb-4">
                  <Link
                    to={`/product/${category}/${slugify(item.title)}`}
                    className="block text-center text-white font-medium text-sm py-2 rounded transition-colors duration-300 bg-[#2e3183] hover:bg-[#1f2258]"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wall Decor */}
      <div className="py-10 px-4" id="wall-decor">
        <h2 className="text-3xl  text-[#272566] mb-2 sm:mb-1"
          style={{
            fontFamily: "'Math'",
            fontWeight: 300
          }}
        >Wall Decors</h2>
        <div className="w-full h-[0.5px] bg-gray-300"></div>
        </div>
        <img src={sec2image} className="mb-1" />
      <div className="py-10 px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections3.map((item, index) => {
            const category = "decor";
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/product/${category}/${slugify(item.title)}`} className="block overflow-hidden">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <h3 className="text-lg font-medium mt-3 px-4 text-center text-gray-800">
                  {item.title}
                </h3>

                <div className="px-4 mt-auto mb-4">
                  <Link
                    to={`/product/${category}/${slugify(item.title)}`}
                    className="block text-center text-white font-medium text-sm py-2 rounded transition-colors duration-300 bg-[#2e3183] hover:bg-[#1f2258]"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
