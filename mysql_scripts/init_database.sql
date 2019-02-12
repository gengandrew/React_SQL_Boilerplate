-- CREATE DATABASE bookmarktest;

use bookmarktest;

CREATE TABLE User (UserID int NOT NULL AUTO_INCREMENT, Username VARCHAR(50) NOT NULL, Passwd VARCHAR(50) NOT NULL, UserType int NOT NULL, PRIMARY KEY (UserID));

CREATE TABLE UserFavorites (LocalKey int NOT NULL AUTO_INCREMENT, UserID int NOT NULL, BookmarkID int NOT NULL, PRIMARY KEY (LocalKey));

CREATE TABLE BookmarkList (BookmarkID int NOT NULL AUTO_INCREMENT, CategoryID int NOT NULL, BookmarkDescription VARCHAR(50) NOT NULL, BookmarkName int NOT NULL, URL VARCHAR(50) NOT NULL, PRIMARY KEY (BookmarkID));

CREATE TABLE CategoryList (CategoryID int NOT NULL AUTO_INCREMENT, CategoryName VARCHAR(50) NOT NULL, PRIMARY KEY(CategoryID));
