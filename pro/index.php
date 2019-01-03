<?php
	require "server/con_db.php";
	include_once "server/functions.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Tech Box</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Old+Standard+TT">
</head>
<body>

<header class="container-fluid">
    <div class="row">
        <div class="col-12 no-padding">
            <nav class="navbar navbar-light bg-light navbar-expand-sm fixed-top">
                <a class="navbar-brand" href="index.html"><img src="media/logo.png" width="175" height="50" alt="logo">
                </a>
                <button class="navbar-toggler" type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse row" id="navbarToggler">
                    <div class="col-lg-8 offset-lg-1 col-md-8 col-sm-7">
                        <form class="form-inline">
                            <div class="input-group">
                                <input type="search" class="form-control"
                                       id="search-bar" name="search"
                                       placeholder="Find Mobile Phones, Laptops, and more..">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary btn-lg" type="button"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-5">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 float-sm-right">
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html"><i class="fas fa-heart sc-color fa-2x"></i></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html"><i class="fas fa-shopping-cart sc-color fa-2x"></i></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="index.html"> <span class="sc-fs">Login </span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>

</header>
<div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar" class="bg-light">
        <ul class="list-unstyled components">
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle nav-link">
                    <i class="fas fa-sitemap"></i>
                    Categories
                </a>
                <ul class="collapse show list-unstyled" id="homeSubmenu">
                	<?php
                		$rows = getCats($conn);
                		for ($var = 0; $var < mysqli_num_rows($rows); $var += 1)
                		{
                			$row = mysqli_fetch_assoc($rows);
                            $active = "";
                            $url = "";
                            if (isset($_GET['cat']) && $_GET['cat'] == $row['cat_id'])
                            {
                                $active = "active";
                                if (isset($_GET['brand']))
                                    $url = "index.php?brand=".$_GET['brand'];
                                else
                                    $url = "index.php";
                            }
                            else if (isset($_GET['brand']))
                                $url = "index.php?cat=".$row['cat_id']."&brand=".$_GET['brand'];
                            else
                                $url = "index.php?cat=".$row['cat_id'];
                			echo "<li class = '".$active."'> <a class = 'nav-link' href='".$url."'>".$row['cat_title']."</a>";
                		}
                	?>
                </ul>
            </li>
            <li class="active">
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="true" class="dropdown-toggle nav-link">
                    <i class="fas fa-briefcase"></i>
                    Brands
                </a>
                <ul class="collapse show list-unstyled" id="pageSubmenu">
                    <?php
                		$rows = getBrands($conn);
                		for ($var = 0; $var < mysqli_num_rows($rows); $var += 1)
                		{
                			$row = mysqli_fetch_assoc($rows);
                            $active = "";
                            if (isset($_GET['brand']) && $_GET['brand'] == $row['brand_id'])
                            {
                                $active = "active";
                                if (isset($_GET['cat']))
                                    $url = "index.php?cat=".$_GET['cat'];
                                else
                                    $url = "index.php";
                            }
                            else if (isset($_GET['cat']))
                                $url = "index.php?brand=".$row['brand_id']."&cat=".$_GET['cat'];
                            else
                                $url = "index.php?brand=".$row['brand_id'];
                			echo "<li class = '".$active."'> <a class = 'nav-link' href='".$url."'>".$row['brand_title']."</a>";
                		}
                	?>
                </ul>
            </li>
            <li>
                <a class="nav-link"  href="#">
                    <i class="fas fa-question"></i>
                    FAQ
                </a>
            </li>
            <li>
                <a class="nav-link"  href="#">
                    <i class="fas fa-paper-plane"></i>
                    Contact
                </a>
            </li>
        </ul>
    </nav>
    <article id="content" class="container-fluid bg-white">

        <div class="row">
            <div class="col">
                
                <?php
                    if (!isset($_GET['brand']) && !isset($_GET['cat']))
                    {
                        $result = getAllProducts($conn);
                        echo "Showing all products (select a category and/or product for more specific results): (".mysqli_num_rows($result)." results)<br>";
                        echo "<table width=100%>
                              <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Description</th>
                              </tr>";
                        for ($var = 0; $var < mysqli_num_rows($result); $var++)
                        {
                            $row = mysqli_fetch_assoc($result);
                            echo "<tr>
                                    <td>".$row['pro_title']."</td>
                                    <td>".getCatName($conn, $row['pro_cat'])."</td>
                                    <td>".getBrandName($conn, $row['pro_brand'])."</td>
                                    <td>".$row['pro_price']."</td>
                                    <td>".$row['pro_desc']."</td>
                                  </tr>";
                        }
                        echo "</table>";
                    }
                    else if (isset($_GET['brand']) && !isset($_GET['cat']))
                    {
                        $result = getProductsByBrand($conn, $_GET['brand']);
                        echo "Results for Brand: <b>".getBrandName($conn, $_GET['brand'])."</b>: (".mysqli_num_rows($result)." results)<br>"; 
                        echo "<table width=100%>
                              <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Description</th>
                              </tr>";
                        for ($var = 0; $var < mysqli_num_rows($result); $var++)
                        {
                            $row = mysqli_fetch_assoc($result);
                            echo "<tr>
                                    <td>".$row['pro_title']."</td>
                                    <td>".getCatName($conn, $row['pro_cat'])."</td>
                                    <td>".getBrandName($conn, $row['pro_brand'])."</td>
                                    <td>".$row['pro_price']."</td>
                                    <td>".$row['pro_desc']."</td>
                                  </tr>";
                        }
                        echo "</table>";  
                    }
                    else if (!isset($_GET['brand']) && isset($_GET['cat']))
                    {
                        $result = getProductsByCat($conn, $_GET['cat']);
                        echo "Results for Category: <b>".getCatName($conn, $_GET['cat'])."</b>: (".mysqli_num_rows($result)." results)<br>";
                        echo "<table width=100%>
                              <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Description</th>
                              </tr>";
                        for ($var = 0; $var < mysqli_num_rows($result); $var++)
                        {
                            $row = mysqli_fetch_assoc($result);
                            echo "<tr>
                                    <td>".$row['pro_title']."</td>
                                    <td>".getCatName($conn, $row['pro_cat'])."</td>
                                    <td>".getBrandName($conn, $row['pro_brand'])."</td>
                                    <td>".$row['pro_price']."</td>
                                    <td>".$row['pro_desc']."</td>
                                  </tr>";
                        }
                        echo "</table>";
                    }
                    else
                    {
                        $result = getProductsByBrandCat($conn, $_GET['brand'], $_GET['cat']);
                        echo "Results for Category: <b>".getCatName($conn, $_GET['cat'])."</b> and Brand: <b>".getBrandName($conn, $_GET['brand'])."</b>: (".mysqli_num_rows($result)." results)<br>";
                        echo "<table width=100%>
                              <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Description</th>
                              </tr>";
                        for ($var = 0; $var < mysqli_num_rows($result); $var++)
                        {
                            $row = mysqli_fetch_assoc($result);
                            echo "<tr>
                                    <td>".$row['pro_title']."</td>
                                    <td>".getCatName($conn, $row['pro_cat'])."</td>
                                    <td>".getBrandName($conn, $row['pro_brand'])."</td>
                                    <td>".$row['pro_price']."</td>
                                    <td>".$row['pro_desc']."</td>
                                  </tr>";
                        }
                        echo "</table>";
                    }
                ?>

            </div>
        </div>
    </article>


</div>
<footer class="container-fluid">
        <div class="row">
            <div class="col text-center">
               &copy; 2019 by Muhammad Ali Makhdoom
            </div>
        </div>
    </footer>
<script src="js/jquery-3.3.1.js"></script>
<script src="js/bootstrap.bundle.js"></script>
</body>
</html>