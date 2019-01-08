<?php
require_once "db_connection.php";
if(isset($_POST['insert_pro'])){
    //getting text data from the fields
    $pro_title = $_POST['pro_title'];
    $pro_cat = $_POST['pro_cat'];
    $pro_brand = $_POST['pro_brand'];
    $pro_price = $_POST['pro_price'];
    $pro_desc = $_POST['pro_desc'];
    $pro_keywords = $_POST['pro_keywords'];

    //getting image from the field
    $pro_image = $_FILES['pro_image']['name'];
    $pro_image_tmp = $_FILES['pro_image']['tmp_name'];
    move_uploaded_file($pro_image_tmp,"product_images/$pro_image");

    $insert_product = "insert into products (pro_cat, pro_brand,pro_title,pro_price,pro_desc,pro_image,pro_keywords) 
                  VALUES ('$pro_cat','$pro_brand','$pro_title','$pro_price','$pro_desc','$pro_image','$pro_keywords');";
    $insert_pro = mysqli_query($con, $insert_product);
    if($insert_pro){
        header("location: ".$_SERVER['PHP_SELF']);
    }
}
    if (isset($_POST['brand_title']))
    {
        $sql = "INSERT INTO brands (brand_title) VALUES('".$_POST['brand_title']."');";
        mysqli_query($con, $sql);
        header("Location: insert_brand.php?uploaded=1");
    }
    if (isset($_GET['uploaded']) && $_GET['uploaded'] == '1')
    {
        echo "<script type='text/javascript'>alert('Brand Added');</script>";
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Brand</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Old+Standard+TT">
    <style>
        * {
            font-family: 'Old Standard TT', serif;
        }
    </style>
</head>
<body>
<div class="container">
    <h1 class="text-center my-4"><i class="fas fa-plus fa-md"></i> <span class="d-none d-sm-inline"> Add New </span> Brand </h1>
    <form method="POST" enctype="multipart/form-data">
        <div class="row">
            <div class="d-none d-sm-block col-sm-3 col-md-4 col-lg-2 col-xl-2 mt-auto">
                <label for="pro_title" class="float-md-right"> <span class="d-sm-none d-md-inline"> Brand </span> Title:</label>
            </div>
            <div class="col-sm-9 col-md-8">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-file-signature"></i></div>
                    </div>
                    <input type="text" class="form-control" id="pro_title" name="brand_title" placeholder="Enter Brand Title" required>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="d-none d-sm-block col-sm-3 col-md-4 col-lg-2 col-xl-2 mt-auto"></div>
            <div class="col-sm-9 col-md-8">
                <button type="submit" class="btn btn-primary btn-block"><i class="fas fa-plus"></i> Insert Now </button>
            </div>
        </div>
    </form>
</div>
</body>
</html>

