jsonlp(req)
 new res,user
 set user=$get(req("params","user"))
 if user="" do  QUIT $$errorResponse^%zmgweb(.errors)
     . set errors("error")="Unable to identify user by username"
 if '$data(^SOLID(user)) do  QUIT $$errorResponse^%zmgweb(.errors)
     . set errors("error")="Unable to identify user by username"
 S cnt=0
 set cnt=cnt+1
 set cnt1=0
 S node1=""
 F  S node1=$O(^SOLID(user,node1)) Q:node1=""  D
 . I $D(^SOLID(user,node1))=1 set res(cnt)=^SOLID(user,node1)
 . S node2=""
 . F  S node2=$O(^SOLID(user,node1,node2)) Q:node2=""  D 
 .. I $D(^SOLID(user,node1,node2))=1 set res(cnt,node1,node2)=^SOLID(user,node1,node2)
 .. S node3=""
 .. F  S node3=$O(^SOLID(user,node1,node2,node3)) Q:node3=""  D
 ... I $D(^SOLID(user,node1,node2,node3))=1 set res(cnt,node1,node2,node3)=^SOLID(user,node1,node2,node3)
 ... S node4=""
 ... F  S node4=$O(^SOLID(user,node1,node2,node3,node4)) Q:node4=""  D
 .... I $D(^SOLID(user,node1,node2,node3,node4))=1 set res(cnt,node1,node2,node3,node4)=^SOLID(user,node1,node2,node3,node4)
 .... s node5=""
 .... F  S node5=$O(^SOLID(user,node1,node2,node3,node4,node5)) Q:node5=""  D
 ..... I $D(^SOLID(user,node1,node2,node3,node4,node5))=1 set res(cnt,node1,node2,node3,node4,node5)=^SOLID(user,node1,node2,node3,node4,node5)
 ..... Q
 .... Q
 ... Q
 .. Q
 . Q
 QUIT $$response^%zmgweb(.res)

