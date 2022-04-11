function length(head) {
    if(head == null) {
      return 0;
    }else{
      let num = 0;
      while (head.next) {
        head = head.next
        num += 1;
      }
      
      return num;
    }
  
  
}