<!DOCTYPE html>
<html lang="en">

<head>
	<link rel="icon" href="saflogo.png" type="image/x-icon">

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,
						initial-scale=1.0">
	<title>Login Page</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>

	<div class="text">
		<header>
			<h3>
			<div class="head">Saffrony of Institute of Technology</div>
			</h3>
		</header>
	</div>

	<div class="paragraph">
		<p>
		<pre>                                Today, we are at the beginning of a Fourth Industrial Revolution 
			        where it is incumbent upon graduates to have mastery on 
				their technical skills along with people-skills & 
				numerous other soft-skills. Moreover, they will be 
				competing with Artificial Intelligence driven by 
				Machine Learning, and Robots that are replacing people with 
				monotonous occupations that don't require much of these skills.
 				Hence, Saffrony Institute of Technology introduced a two-hour
				weekly session named "Sharpen Your Skills" which will train
				Saffronites in skills cited by the Global 
				Challenge Insight Report, 2016 titled: The Future of 
 				Jobs - by World Economic Forum.</pre>
		</p>
	</div>

	<!-- container div -->
	<div class="container">
		<form action="connect.php" method="post">

			<!-- upper button section to select
			the login or signup form -->
			<div class="slider"></div>
			<div class="btn">
				<button class="login">Login</button>
				<button class="Register">Register</button>
			</div>

			<!-- Form section that contains the
			login and the signup form -->
			<div class="form-section">

				<!-- login form -->

				<div class="login-box">
					<input type="email" class="email ele" placeholder="email" required name="email">
					<input type="password" class="password ele" placeholder="password" required name="password">
					<div class="pass-link"><a href="#">Forget password</a></div>
					<button class="clkbtn">Login</button>
					<div class="login-signup">

					</div>
					<p>Don't Have an Account? <a href="">Register</a></p>
				</div>

				<!-- signup form -->
				<div class="signup-box">
					<input type="text" class="name ele" placeholder="first name">
					<input type="text" class="name ele" placeholder=" last name">





					<select name="gender" class="Name ele1" placeholder="Gender">
						<option value="" disabled selected>Gender</option>
						<option value="female">Female </option>
						<option value="male">Male</option>
					</select>


					<select name="Department" class="ele1" placeholder="Choose Department">
						<option value="" disabled selected>Choose Department</option>
						<option value="IT">Information Technology</option>
						<option value="CE">Computer Engineering</option>
						<option value="Mechanical">Mechanical Engineering</option>
						<option value="Civil">Civil Engineering</option>
					</select>



					

					<input type="tel" class="Mobile Number ele" placeholder="Mobile Number">

					<input type="email" class="email ele" placeholder="Email Id">
					<input type="password" class="password ele" placeholder="password">
					

					
					<button class="clkbtn1">Register</button>
					<div class="login-signup">

						<p>Already Member? <a href="">Login</a></p>
					</div>
				</div>
		</form>
	</div>
	</div>
	</form>


	<script src="index.js"></script>

</body>




</html>