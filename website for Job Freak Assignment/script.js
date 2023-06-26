let homeObj = {
    header: "Maldives Tourism",
    para: ["Welcome to the mesmerizing Maldives, a tropical haven where turquoise waters meet pristine white sands, and stunning coral reefs are waiting to be explored. Located in the heart of the Indian Ocean, this archipelago of 26 coral atolls offers a dreamlike destination for travelers seeking the ultimate escape. Join us on a virtual journey as we uncover the wonders of the Maldives and discover why it's truly a slice of paradise on Earth.",
           "The Maldives is a destination that exceeds every expectation, where nature's beauty intertwines with luxurious indulgence. Whether you're seeking adventure, relaxation, romance, or cultural immersion, this tropical paradise offers it all. So, pack your bags and embark on a journey to the Maldives, where memories are made and dreams become a reality. Discover the magic of this enchanting destination and create experiences that will last a lifetime."]
}

let contactObj = {
    header: "Contact"
}

let infoObj = {
    header: "Information", 
    para: "The Maldives is a popular tourist destination known for its pristine beaches, crystal-clear waters, and abundant marine life.",
    points : [
         "Geography and Location: The Maldives is an archipelago located in the Indian Ocean, southwest of Sri Lanka. It consists of 26 coral atolls, which are made up of more than 1,000 coral islands.",
         "Natural Beauty: The Maldives is renowned for its breathtaking natural beauty. Visitors can enjoy white sandy beaches, turquoise lagoons, and stunning coral reefs. The country is home to a diverse range of marine species, making it a paradise for snorkeling and diving enthusiasts.",
         "Resorts and Accommodation: The Maldives is famous for its luxury resorts, many of which are located on private islands. These resorts offer a range of accommodation options, including overwater villas, beachfront bungalows, and exclusive retreats. Each resort typically has its own facilities, such as restaurants, spas, and water sports centers.",
         "Water Activities: With its abundant marine life and clear waters, the Maldives offers numerous water-based activities. Visitors can engage in snorkeling, scuba diving, fishing, kayaking, jet skiing, and sailing. Many resorts provide equipment and arrange excursions for these activities.",
         "Marine Life and Coral Reefs: The Maldives boasts a vibrant underwater ecosystem, with colorful coral reefs and a rich diversity of marine species. Divers and snorkelers can encounter tropical fish, sea turtles, manta rays, whale sharks, and various types of coral. The Maldives is also a popular destination for marine conservation and research efforts."
    ]
}

let guideObj = {
    header: "Guide",
    para: "The Maldives enjoys a tropical climate with two main seasons: the dry season (November to April) and the wet season (May to October). The dry season is considered the best time to visit, as the weather is sunny, with minimal rainfall and calm seas.",
    video: "https://www.youtube.com/watch?v=EnX1wLPjxVw"
}

let container = document.getElementById("container-right");
let btnHome = document.getElementById('btnHome');
let btnContact = document.getElementById('btnContact');
let btnInfo = document.getElementById('btnInfo');
let btnGuide = document.getElementById('btnGuide');

// home content generation

// default on refresh

let heading = document.createElement('h1');
heading.textContent = homeObj.header;
container.appendChild(heading);

// first phase container

// first phase container
let containerHomeFirst = document.createElement('div');
containerHomeFirst.classList.add('d-flex', 'flex-row', 'justify-content-start');

// creating paragraphs
let homePara1 = document.createElement('p');
homePara1.textContent = homeObj.para[0];
homePara1.style.marginTop = '30px'; 
homePara1.style.paddingRight = '20px';
homePara1.style.fontSize = '18px';  
containerHomeFirst.appendChild(homePara1);

// creating image 
let image1 = document.createElement('img');
image1.src = 'https://www.themaldivesexpert.com/wp-content/uploads/2018/07/reef-1024x768.jpg';
image1.classList.add('image')
image1.alt = 'image of resort';
containerHomeFirst.appendChild(image1);

// second phase container
let containerHomeSecond = document.createElement('div');
containerHomeSecond.classList.add('d-flex', 'flex-row', 'justify-content-start', 'mt-5');

// creating image
let image2 = document.createElement('img');
image2.src = 'https://www.planetware.com/wpimages/2022/05/maldives-best-all-inclusive-resorts-kudadoo-maldives-private-island.jpg';
image2.width = "300";
image2.style.borderRadius = '12px'; 
image2.alt = 'image of coral reefs';
containerHomeSecond.appendChild(image2);

// creating paragraphs
let homePara2 = document.createElement('p');
homePara2.textContent = homeObj.para[1];
homePara2.style.marginTop = '30px'; 
homePara2.style.paddingLeft = '20px';
homePara2.style.fontSize = '18px'; 
containerHomeSecond.appendChild(homePara2);


// appending the home container to default container

container.appendChild(containerHomeFirst);
container.appendChild(containerHomeSecond);



// onclick of HOME button

btnHome.onclick = function() {

    // reseting the container
    container.textContent = "";

    // creating the heading
    let heading = document.createElement('h1');
    heading.textContent = homeObj.header;
    container.appendChild(heading);

    // first phase container

    // first phase container
    let containerHomeFirst = document.createElement('div');
    containerHomeFirst.classList.add('d-flex', 'flex-row', 'justify-content-start');

    // creating paragraphs
    let homePara1 = document.createElement('p');
    homePara1.textContent = homeObj.para[0];
    homePara1.style.marginTop = '30px'; 
    homePara1.style.paddingRight = '20px';
    homePara1.style.fontSize = '18px';  
    containerHomeFirst.appendChild(homePara1);

    // creating image 
    let image1 = document.createElement('img');
    image1.src = 'https://www.themaldivesexpert.com/wp-content/uploads/2018/07/reef-1024x768.jpg';
    image1.classList.add('image')
    image1.alt = 'image of resort';
    containerHomeFirst.appendChild(image1);

    // second phase container
    let containerHomeSecond = document.createElement('div');
    containerHomeSecond.classList.add('d-flex', 'flex-row', 'justify-content-start', 'mt-5');

    // creating image
    let image2 = document.createElement('img');
    image2.src = 'https://www.planetware.com/wpimages/2022/05/maldives-best-all-inclusive-resorts-kudadoo-maldives-private-island.jpg';
    image2.width = "300";
    image2.style.borderRadius = '12px'; 
    image2.alt = 'image of coral reefs';
    containerHomeSecond.appendChild(image2);

    // creating paragraphs
    let homePara2 = document.createElement('p');
    homePara2.textContent = homeObj.para[1];
    homePara2.style.marginTop = '30px'; 
    homePara2.style.paddingLeft = '20px';
    homePara2.style.fontSize = '18px'; 
    containerHomeSecond.appendChild(homePara2);


    // appending the home container to default container

    container.appendChild(containerHomeFirst);
    container.appendChild(containerHomeSecond);
    }

// contact content generation

btnContact.onclick = function() {

    // reseting the container
    container.textContent = "";

    // creating the heading
    let heading = document.createElement('h1');
    heading.textContent = contactObj.header;
    container.appendChild(heading);

    // parent container 
    let parentContainer = document.createElement('div');
    parentContainer.classList.add('d-flex', 'flex-row', 'justify-content-center', 'ml-5');
    container.appendChild(parentContainer);


    // local container 1
    let containerContact1 = document.createElement('div');
    containerContact1.classList.add('d-flex', 'flex-column', 'justify-content-center', 'ml-3', 'mt-5', 'mr-3', 'w-50');

    // image 1
    let image1 = document.createElement('img');
    image1.src = "image_resort_1.jpg";
    image1.alt = "image of resort";
    image1.style.marginLeft = "40px"; 
    image1.classList.add('w-50', 'border-shape', 'text-center');
    containerContact1.appendChild(image1);

    // heading of hotel name
    let subHeading = document.createElement('h5');
    subHeading.textContent = "Kuda Villingili Maldives - Premium Luxury Resort with Free TransportationOpens in new window";
    subHeading.style.paddingRight = "120px" ; 
    subHeading.classList.add("mt-4");  
    containerContact1.appendChild(subHeading);

    // price 
    let para = document.createElement('p');
    para.textContent = "Rs 76,999";
    para.classList.add("mt-3");
    containerContact1.appendChild(para);

    // anchor
    let link1 = document.createElement('a');
    link1.href = "https://www.booking.com/hotel/mv/kuda-villingili-resort-maldives.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4Aq7i5KQGwAIB0gIkYjNlMjc3YmMtOGY5YS00MGRkLWI2OTEtOGVlMmM1ODdiZmU32AIG4AIB&sid=11928bb422d868f4e3c62a4a9443ba20&all_sr_blocks=718637301_372181448_2_41_0;checkin=2023-07-19;checkout=2023-07-20;dest_id=129;dest_type=country;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=718637301_372181448_2_41_0;hpos=1;matching_block_id=718637301_372181448_2_41_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=718637301_372181448_2_41_0__140250;srepoch=1687761234;srpvid=e9bd2e2854910025;type=total;ucfs=1&#hotelTmpl";
    link1.target = "_blank";


    // button
    let btn = document.createElement('button');
    btn.textContent = "Book";
    btn.classList.add("w-25", "mt-3", "btn", "btn-primary");  
    link1.appendChild(btn);
    containerContact1.appendChild(link1);

    // appending to parent container
    parentContainer.appendChild(containerContact1);

    // local container 2
    container.appendChild(parentContainer);
    let containerContact2 = document.createElement('div');
    containerContact2.classList.add('d-flex', 'flex-column', 'justify-content-center', 'ml-3', 'mt-5', 'mr-3', 'w-50');

     // image 2
     let image2 = document.createElement('img');
     image2.src = "https://th.bing.com/th?id=OIP.Bwad_OW5yt0rKPU-bz0qUQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
     image2.alt = "image of resort";
     image2.style.marginLeft = "40px"; 
     image2.classList.add('w-50', 'border-shape', 'text-center');
     containerContact2.appendChild(image2); 

     // heading of hotel name
    let subHeading2 = document.createElement('h5');
    subHeading2.textContent = "Canareef Resort Maldives - Premium Luxury Resort with Free TransportationOpens";
    subHeading2.style.paddingRight = "120px" ; 
    subHeading2.classList.add("mt-4");  
    containerContact2.appendChild(subHeading2);

    // price 
    let para2 = document.createElement('p');
    para2.textContent = "Rs 81,999";
    para2.classList.add("mt-3");
    containerContact2.appendChild(para2);

    // anchor
    let link2 = document.createElement('a');
    link2.href = "https://www.booking.com/hotel/mv/canareef-resort-maldives.en-gb.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYAQm4ARfIAQzYAQHoAQH4AQyIAgGoAgO4Aq7i5KQGwAIB0gIkYjNlMjc3YmMtOGY5YS00MGRkLWI2OTEtOGVlMmM1ODdiZmU32AIG4AIB&sid=11928bb422d868f4e3c62a4a9443ba20&all_sr_blocks=147760301_374300277_2_25_0;checkin=2023-07-19;checkout=2023-07-20;dest_id=129;dest_type=country;dist=0;group_adults=2;group_children=0;hapos=4;highlighted_blocks=147760301_374300277_2_25_0;hpos=4;matching_block_id=147760301_374300277_2_25_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=147760301_374300277_2_25_0__31120;srepoch=1687761234;srpvid=e9bd2e2854910025;type=total;ucfs=1&#hotelTmpl";
    link2.target = "_blank";

    // button
    let btn2 = document.createElement('button');
    btn2.textContent = "Book";
    btn2.classList.add("w-25", "mt-3", "btn", "btn-primary");
    link2.appendChild(btn2);  
    containerContact2.appendChild(link2);

    // appending to parent container
    parentContainer.appendChild(containerContact2);

}

// information content generation

btnInfo.onclick = function() {

    // reseting the container
    container.textContent = "";

    // creating the heading
    let heading = document.createElement('h1');
    heading.textContent = infoObj.header;
    container.appendChild(heading);

    // creating the paragraph content
    let para = document.createElement('p');
    para.textContent = infoObj.para;
    para.classList.add("para");
    container.appendChild(para);
    
    // creating the points for information
    let ul = document.createElement('ul');

    // looping through the list and creating the points
    for(let each of infoObj.points) {
        let li = document.createElement('li');
        li.textContent = each;
        li.classList.add("points");
        ul.appendChild(li);  
    }
    container.appendChild(ul);
    
}

// guide content generation

btnGuide.onclick = function() {

    // reseting the container
    container.textContent = "";

    // creating the heading
    let heading = document.createElement('h1');
    heading.textContent = guideObj.header;
    container.appendChild(heading); 

    // container for paragraph
    let containerPara = document.createElement('div');
    containerPara.textContent = guideObj.para;
    containerPara.classList.add('para');
    container.appendChild(containerPara);

    // container for frame 
    let containerFrame = document.createElement('div');
    containerFrame.classList.add('d-flex', 'flex-row', 'justify-content-center', 'mt-5');

    // YouTube video element
    let videoFrameContainer = document.createElement('div');
    let frame = document.createElement('iframe');
    frame.title = "Maldives Tourism Website";
    frame.width = "450"; 
    frame.height = "300";
    frame.src = guideObj.video;
    frame.classList.add('border-shape', 'd-flex', 'flex-row', 'justify-content-center'); 
    frame.classList.add('style-frame');
    videoFrameContainer.appendChild(frame); 

    containerFrame.appendChild(videoFrameContainer);
    container.appendChild(containerFrame);
}

