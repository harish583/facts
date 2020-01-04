<?php 
    $conn = mysqli_connect('localhost','root','','facts')  or die ("<script>alert('end');</script>");
    $ifact = $_POST['fact_insert'];
    $callbck = $_POST['callback'];
    $lang = $_POST['lng'];
    if($lang==='En'){
        $row = mysqli_query($conn,"INSERT INTO facts_list_e (fact,callback,active) VALUES ('$ifact','$callbck',1)");
    }else{
        $row = mysqli_query($conn,"INSERT INTO facts_list_t (fact,callback,active) VALUES ('$ifact','$callbck',1)");
    }
    //$result = [];
    // while($rows = mysqli_fetch_assoc($row)){
    //     $id = $rows['id'];
    //     $fact = $rows['fact'];
    //     $result[] = array("message"=>'sucess',"id"=>$id,"fact"=>$fact);
    // }
    if($row){
        $data[] = array("message"=>"sucess","language"=>$lang);
    }else{
        $data[] = array("message"=>"fail","language"=>$lang);
    }
    echo json_encode($data);
?>
