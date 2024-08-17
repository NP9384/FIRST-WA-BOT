<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Text Shadow</title>
</head>
<body>
	<style>
		@import url("https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@400;600;700&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Alumni Sans", sans-serif;
  font-size: 16px;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 2em;
  background: #000000;
  color: #fff;
  text-transform: uppercase;
  gap: 30px;
}

h1 {
  font-size: 2.5em;
  text-decoration: underline;
}
@media (max-width: 768px) {
  h1 {
    font-size: 1.3em;
  }
}

.text-shadow {
  font-style: italic;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: #fff;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px #FF0B00;
  transition: all 0.5s ease-in-out;
  text-align: center;
  letter-spacing: 0.2em;
  -webkit-animation: flicker 0.5s ease-in-out infinite alternate;
          animation: flicker 0.5s ease-in-out infinite alternate;
}
.text-shadow:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .tags small {
    font-size: 0.5em;
  }
}

@-webkit-keyframes flicker {
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #ffffff;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #2962ff;
  }
}

@keyframes flicker {
  0% {
    opacity: 0.5;
    text-shadow: 2px 2px 10px #2962ff;
  }
  100% {
    opacity: 1;
    text-shadow: 2px 2px 20px #2962ff;
  }
}
	</style>
<!-- partial:index.partial.html -->
<section>
	<h1 class="text-shadow"> ♤○DARK NP○♤</h1>
	<div class="tags">
		<h2 class="text-shadow"><small><u>DARK NP CREATED BY NIPUNA PROMOD</u></small></h2>
	</div>
</section>
<img src="https://i.ibb.co/6BrBx8B/Screenshot-20240313-205627-Gallery.jpg">
<!-- partial -->
  
</body>
</html>

