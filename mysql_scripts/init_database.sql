-- CREATE DATABASE bookmarktest;

USE bookmarktest;

CREATE TABLE User (UserID int NOT NULL AUTO_INCREMENT, Username VARCHAR(50) NOT NULL, Passwd VARCHAR(50) NOT NULL, UserType int NOT NULL, PRIMARY KEY (UserID));

CREATE TABLE UserFavorites (LocalKey int NOT NULL AUTO_INCREMENT, UserID int NOT NULL, BookmarkID int NOT NULL, PRIMARY KEY (LocalKey));

CREATE TABLE Bookmarks (BookmarkID int NOT NULL AUTO_INCREMENT, BookmarkDescription VARCHAR(50) NOT NULL, BookmarkName int NOT NULL, URL VARCHAR(50) NOT NULL, PRIMARY KEY (BookmarkID));

CREATE TABLE CategoryList (CategoryID int NOT NULL AUTO_INCREMENT, CategoryName VARCHAR(50) NOT NULL, PRIMARY KEY(CategoryID));

CREATE TABLE CategoryBookmarks (LocalKey int NOT NULL, CategoryID int NOT NULL, BookmarkID int NOT NULL, PRIMARY KEY(LocalKey));

INSERT INTO Bookmark (BookmarkName, BookmarkDescription, URL) VALUES ("Google", "This is Google!!", "https://www.google.com");
INSERT INTO Bookmark (BookmarkName, BookmarkDescription, URL) VALUES ("Yahoo", "This is Yahoo!!", "https://www.yahoo.com");
INSERT INTO Bookmark (BookmarkName, BookmarkDescription, URL) VALUES ("Fake News", "This is FAKE NEWS!!", "https://www.washingtonpost.com");