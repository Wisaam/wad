<?php
	
	function getCats($conn){
		$query = "SELECT * FROM category";
		$rows = mysqli_query($conn, $query);
		return $rows;
	}

	function getBrands($conn){
		$query = "SELECT * FROM brands";
		$rows = mysqli_query($conn, $query);
		return $rows;
	}