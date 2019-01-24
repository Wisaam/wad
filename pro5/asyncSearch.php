<?php
    require_once "server/db_connection.php";

    $getProQuery = '';
    if(isset($_GET['search'])){
        $user_query = $_GET['search'];
        $getProQuery = "select * from products where pro_keywords like '%$user_query%'";
    }
    $getProResult = mysqli_query($con,$getProQuery);
    $count_pro = mysqli_num_rows($getProResult);

    $output = "";

    if($count_pro==0){
        $output = $output."<h4 class='alert-warning align-center my-2 p-2'> No Product found in selected criteria </h4>";
    }
    while($row = mysqli_fetch_assoc($getProResult)){
        $pro_id = $row['pro_id'];
        $pro_title = $row['pro_title'];
        $pro_price = $row['pro_price'];
        $pro_image = $row['pro_image'];
        $output = $output."
                <div class='col-sm-6 col-md-4 col-lg-3 text-center product-summary'>
                    <h5 class='text-capitalize'>$pro_title</h5>
                    <img src='admin/product_images/$pro_image'>
                    <p> <b> Rs $pro_price/-  </b> </p>
                    <a href='detail.php' class='btn btn-info btn-sm'>Details</a>
                    <a href='#'>
                        <button class='btn btn-primary btn-sm'>
                            <i class='fas fa-cart-plus'></i> Add to Cart
                        </button>
                    </a>
                </div>
        ";
    }

    echo $output;