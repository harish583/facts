<?php 
 header("Access-Control-Allow-Origin: *");

$inputJSON = file_get_contents('php://input');
$input = json_encode(json_decode($inputJSON, TRUE));
echo $input; 
echo "2";
echo $_POST['old_count'];
    $conn = mysqli_connect('localhost','root','','facts')  or die ("<script>alert('end');</script>");
    $i = $_POST['old_count'];
    $lang = $_POST['lng'];
    if($lang==='En'){
        $row = mysqli_query($conn,"select * from facts_list_e LIMIT 2 OFFSET $i");
    }else{
        $row = mysqli_query($conn,"select * from facts_list_t LIMIT 2 OFFSET $i");
    }
    $result = [];
    while($rows = mysqli_fetch_assoc($row)){
        $id = $rows['id'];
        $fact = $rows['fact'];
        $result[] = array("message"=>'sucess',"id"=>$id,"fact"=>$fact,'language'=>$lang);
    }
    echo json_encode($result);
?>
