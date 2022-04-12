
export default function Header() {

    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
          x.style.width = "0";

        } else {
          x.style.display = "block";
          x.style.width = "250px";
        }
      }
      let jsVoid = void(0);
      
    return (
        <header id="top-nav">
             <a href class="icon"
            onClick={myFunction}>
                <i class="fa fa-bars"></i>
            </a>

            <div id="myLinks">
          <span id="search_exit">
            <span id="input_search"> 
                <input type="text" placeholder="Search.." name="search" />
                <i id="searchBar" class="fa fa-search"></i>

            </span>
            <a href={jsVoid} className="closebtn" onClick={myFunction}>&times;</a>
          </span>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <span id="venturePlans">
            <p href="#home" class="active">
               <strong>VENTURE</strong>  <br />PLANS
            </p> <span id="trademark">&#8482;</span>
            <span id="half_square">
            </span>
            </span>
            <p>Language</p>
        </header>
    );
}
