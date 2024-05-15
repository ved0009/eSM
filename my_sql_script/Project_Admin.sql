------  select table
 ------- 
 insert into tb_mst_users(fname,lname,user_name,email,phone,roleid)
values('Abhi','Singh','abhi','abhi@gmail.com','8505948801',1);


DELIMITER //

CREATE PROCEDURE sp_user_login(
    IN pusername VARCHAR(10),
    IN ppassword VARCHAR(10)
)
BEGIN
    SELECT 
            CONCAT(fname, ' ', lname) AS fullname,
            user_name AS username,
            email,
            phone,
            roleid 
        FROM 
            tb_mst_users
        WHERE 
            (email = pusername OR phone = pusername OR user_name = pusername) AND password = ppassword;
END//

DELIMITER ;
