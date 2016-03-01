---
title: "MB Sports"
layout: client
client_img: images/clients/mbsports/mb-sports.png
site_url: http://mbsportsusa.com
industry: Manufacturing
released_date: 2015-09-28 00:00:00
tech_used:
  - tech:
    name: Jekyll
    url: http://jekyllrb.com
  - tech:
    name: Bootstrap
    url: http://getbootstrap.com
  - tech:
    name: Adobe Flash
    url: http://www.adobe.com/products/flash.html
  - tech:
    name: Microsoft SQL Server 2014 Express
    url: http://www.microsoft.com/en-us/download/details.aspx?id=42299
  - tech:
    name: Microsoft SQL Server Migration Assistant (MSSMA) for MySQL
    url: http://www.microsoft.com/en-us/download/details.aspx?id=42657
  - tech:
    name: ASP.NET Web Api
    url: http://www.asp.net/web-api
  - tech:
    name: Microsoft Azure
    url: https://azure.microsoft.com
  - tech:
    name: Bing Spatial Data Services
    url: https://msdn.microsoft.com/en-us/library/ff701734.aspx
carousel_imgs:
  - url: images/clients/mbsports/mb-sports.png
  - url: images/clients/mbsports/mb-sports2.png
brief_description: Sophcon revamped MB Sports public web presence (www.mbsports.net). The MB Sports web presence has not had a substantial face-lift in roughly 3-years, with specific attention to mobile devices. In addition to the rollout of a new web presence, Sophcon was tasked with migrating their current email, web, and DNS hosting to an Office 365 service.
permalink: /clients/mb-sports/
---
### The Challenge

The MB Sports web presence needed a face-lift. The last substantial update was made to their site, was 3-years prior. After discovery sessions with Sophcon it became quickly apparent that MB Sports was losing visitors coming to the site utilizing a mobile device. and managing content through their current CMS was deemed a very technical exercise.

To top it off MB Sports was only a few months away from introducing their new model year line-up and their Design-A-Boat tool (built using Adobe Flash Professional) needed to have the tool updated with these new graphics. And MB Sports was quickly growing beyond the capabilities of their current hosting provider for email, web, and DNS hosting.

### The Solution

#### Web Presence

Rather than building another desktop website Sophcon opted to build MB Sports a website based Twitter Bootstrap. This provided a great foundation for responsive design. Allowing the website to look great regardless of the device.

Additionally, Sophcon designed a Jekyll implementation which made editing the website as easy as opening and saving [Markdown](http://daringfireball.net/projects/markdown/) files on a file system.

##### Design-A-Boat

Graphics, pricing, updated color swatches and existing source were supplied to Sophcon. The Adobe Flash Professional project was refactored include the necessary changes.

The underlying services and database were developed in PHP and MySQL respectively. Due to the changes in hosting providers ([Microsoft Azure](https://azure.microsoft.com)) and future goals for the organization, this codebase was ported to Microsoft [ASP.NET Web Api](http://www.asp.net/web-api) and database was migrated to [SQL Server 2014 Express](http://www.microsoft.com/en-us/download/details.aspx?id=42299) via the [Microsoft SQL Server Migration Assistant (MSSMA) for MySQL](http://www.microsoft.com/en-us/download/details.aspx?id=42657).

##### Find a Dealer

The "Find a Dealer" functionality of the MB Sports website used to be tied to a zip code database. This database was rarely updated as it was extremely difficult to manage. Sophcon replaced this functionality with a custom solution utilizing [Bing Spatial Data Services](https://msdn.microsoft.com/en-us/library/ff701734.aspx). Making finding a dealer a Spatial Query (based on geography) rather than a Zip Code Query.

##### Search Engine Optimization

Previously the site relied on HTML4 and content to drive search indexes. In designing the MB Sports rendering templates and metadata definitions, Sophcon added support for OpenGraph, Twitter Cards, and JSON Linked Data to further improve the MB Sports search experience. In addition, Sophcon included dynamic sitemap.xml generation.

#### Office 365 Migration
