<?php
	
	function getCats($conn){
		$query = "SELECT * FROM categories";
		$rows = mysqli_query($conn, $query);
		return $rows;
	}

	function getBrands($conn){
		$query = "SELECT * FROM brands";
		$rows = mysqli_query($conn, $query);
		return $rows;
	}

	function getBrandName($conn, $id)
	{
		$query = "SELECT brand_title FROM brands WHERE brand_id = '$id'";
		$rows = mysqli_query($conn, $query);
		return mysqli_fetch_assoc($rows)['brand_title'];	
	}

	function getCatName($conn, $id)
	{
		$query = "SELECT cat_title FROM categories WHERE cat_id = '$id'";
		$rows = mysqli_query($conn, $query);
		return mysqli_fetch_assoc($rows)['cat_title'];	
	}

	function getProductsByBrandCat($conn, $brand_id, $cat_id)
	{
		$query = "SELECT * FROM products WHERE pro_cat = '$cat_id' AND pro_brand = '$brand_id'";
		$rows = mysqli_query($conn, $query);
		return $rows;	
	}

	function getAllProducts($conn)
	{
		$query = "SELECT * FROM products";
		$rows = mysqli_query($conn, $query);
		return $rows;	
	}

	function getProductsByBrand($conn, $brand_id)
	{
		$query = "SELECT * FROM products WHERE pro_brand = '$brand_id'";
		$rows = mysqli_query($conn, $query);
		return $rows;	
	}

	function getProductsByCat($conn, $cat_id)
	{
		$query = "SELECT * FROM products WHERE pro_cat = '$cat_id'";
		$rows = mysqli_query($conn, $query);
		return $rows;	
	}