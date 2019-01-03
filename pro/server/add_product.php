<?php

	require "con_db.php";
	
	if (isset($_POST['pro_title']) &&
		isset($_POST['pro_cat']) &&
		isset($_POST['pro_brand']) &&
		isset($_POST['pro_img']) &&
		isset($_POST['pro_price']) &&
		isset($_POST['pro_desc']) &&
		isset($_POST['pro_kw']))
	{
		$title = mysqli_real_escape_string($conn, $_POST['pro_title']);
		$cat = mysqli_real_escape_string($conn, $_POST['pro_cat']);
		$brand = mysqli_real_escape_string($conn, $_POST['pro_brand']);
		$img = mysqli_real_escape_string($conn, $_POST['pro_img']);
		$price = mysqli_real_escape_string($conn, $_POST['pro_price']);
		$desc = mysqli_real_escape_string($conn, $_POST['pro_desc']);
		$kw = mysqli_real_escape_string($conn, $_POST['pro_kw']);

		$query = "INSERT INTO products (pro_title, pro_cat, pro_brand, pro_image, pro_price, pro_desc, pro_keywords) VALUES('$title','$cat','$brand','$img','$price','$desc','$kw');";
		$res = mysqli_query($conn, $query);
		header("Location: ../admin/insert_product.php?uploaded=true");
	}
	else
		header("Location: ../admin/insert_product.php?uploaded=false");;