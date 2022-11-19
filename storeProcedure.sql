use bookshop;

DELIMITER //
CREATE PROCEDURE sp_admin_data_null ()
BEGIN

SELECT * FROM `admin` ;

END //
DELIMITER ;

call sp_admin_data_null;