CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sender_id INT NOT NULL,
  recipient_id INT NOT NULL,
  content TEXT NOT NULL,
  timestamp DATETIME NOT NULL
);