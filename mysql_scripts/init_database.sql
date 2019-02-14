CREATE DATABASE bookmarktest;
USE bookmarktest;

CREATE TABLE User (UserID int NOT NULL AUTO_INCREMENT, Username VARCHAR(50) NOT NULL, Passwd VARCHAR(50) NOT NULL, UserType int NOT NULL, PRIMARY KEY (UserID));
CREATE TABLE UserFavorites (LocalKey int NOT NULL AUTO_INCREMENT, UserID int NOT NULL, BookmarkID int NOT NULL, PRIMARY KEY (LocalKey));
CREATE TABLE Bookmarks (BookmarkID int NOT NULL AUTO_INCREMENT, BookmarkDescription VARCHAR(50) NOT NULL, BookmarkName VARCHAR(50) NOT NULL, URL VARCHAR(50) NOT NULL, PRIMARY KEY (BookmarkID));
CREATE TABLE CategoryList (CategoryID int NOT NULL AUTO_INCREMENT, CategoryName VARCHAR(50) NOT NULL, UserID int NOT NULL, PRIMARY KEY(CategoryID));
CREATE TABLE CategoryBookmarks (LocalKey int NOT NULL AUTO_INCREMENT, CategoryID int NOT NULL, BookmarkID int NOT NULL, PRIMARY KEY(LocalKey));

INSERT INTO User (Username, Passwd, UserType) VALUES ("Admin", "plzpass4me", 1);

INSERT INTO Bookmarks (BookmarkName, BookmarkDescription, URL) VALUES ("Google", "This is Google!!", "https://www.google.com");
INSERT INTO Bookmarks (BookmarkName, BookmarkDescription, URL) VALUES ("Yahoo", "This is Yahoo!!", "https://www.yahoo.com");
INSERT INTO Bookmarks (BookmarkName, BookmarkDescription, URL) VALUES ("Fake News", "This is FAKE NEWS!!", "https://www.washingtonpost.com");

INSERT INTO CategoryList (Categoryname, UserID) VALUES ("All", 1);
INSERT INTO CategoryList (CategoryName, UserID) VALUES ("Washington", 1);
INSERT INTO `bookmarktest`.`CategoryBookmarks` (`CategoryID`, `BookmarkID`) VALUES ('1', '1');
INSERT INTO `bookmarktest`.`CategoryBookmarks` (`CategoryID`, `BookmarkID`) VALUES ('1', '2');
INSERT INTO `bookmarktest`.`CategoryBookmarks` (`CategoryID`, `BookmarkID`) VALUES ('1', '3');
INSERT INTO `bookmarktest`.`CategoryBookmarks` (`CategoryID`, `BookmarkID`) VALUES ('2', '3');
