require 'rest-client'
require 'rails/configuration'

  #Google Books JS API endpoint
  google_js_url = "https://www.googleapis.com/books/v1/volumes?q=javascript&filter=free-ebooks&key="

  #RestClient get request to the googlebooks JS endpoint with my API Key being parsed into a JS object
  data = JSON.parse( RestClient.get("#{google_js_url}#{ENV["API_KEY"]}"))
  #Iterating through each result/book of the google api
  data["items"].each do |book, index|
  #Creating a new book in my database and assigning it's properties
          Book.create(title: book['volumeInfo']['title'], author:book['volumeInfo']['authors'], img:book['volumeInfo']['imageLinks']['thumbnail'], read_link: book['accessInfo']['webReaderLink'])
   end

