---
title: vNext is vNow (at least for us)
layout: post
description: With recent announcements being made that .NET Core 1.0, ASP.NET Core 1.0, ASP.NET MVC Core 1.0 was RTM'd we felt this was a good time to considering porting some of applications to the new stack.
categories: [blog]
tags: [dotnet, dotnetcore, aspnet, aspnetcore, ef, ef7]
comments: true
modified: 2015-01-22T16:28:00-08:00
author: [Robert Sweeney, Yer Yang]
---

## vNEXT is vNOW ##

With recent announcements being made that .NET Core 1.0, ASP.NET Core 1.0, ASP.NET MVC Core 1.0 was RTM'd we felt this was a good time to considering porting some of applications to the new stack. In the process we ran across some pretty interesting challenges:

## Acquisition ##

This was likely one of the more easier aspects to the entire process. On Windows this can be as simple as installing Visual Studio, however, we wanted a deeper understanding of the cross platform story so, we opted for the full blown CLI experience. Installing the .NET Version Manager (DNVM) as prescribed via the docs.asp.net site and downloading the most recent versions of the .NET Execution environment.

## Project Structure ##

Next was wrapping our minds around the new project structure. We've learned about this ahead of time, through various blog articles and videos, however, dealing with some of the finer nuances such as making references to other projects and ensure dependencies were correctly added, was slight challenging. We first attempted to expedite the process by trying to `dnu wrap` our `.csproj` files however, it did not seem to bring over our dependencies correctly. We ended up bringing all the necessary dependencies in by hand.

As a site note; we can definitely notice is that the number of times you'll see a commit changes for the project.json will be fewer and likely more meaningful. Since, files in the directory structure are included by default. This made it easy to copy and paste most of the existing directory structure over and attempt to issue builds.

### NuGet ###
Another fairly interesting thing we noticed is that NuGet in the world of .NET Core has changed quite substantially from what we've expected from it in previous versions. Seems as if NuGet has been peared down to not deploying static content along with assemblies/etc. It seems as if this from a tooling perspective is being pushed into the [bower] space. `NuGet` now is mainly being used for dealing with coded dependencies and the related dependency graph.

Some documentation points to utilizing the PowerShell commands for adding NuGet packages to a project (e.g. `Install-Package`) this is pretty misleading. We found that utilizing the `dnu install [package]` was pretty much right every single time, as this takes the extra set and adds the correct entries into your `project.json`.

## The bulk of it ##

Most of the broken builds we're able to resolve with adding the correct dependecies. However, we also decided to make a port to Entity Framework 7.0

The EF namespaces were swapped out, basically `System.Data.Entity` --> `Microsoft.Data.Entity`. Connection strings used to be obtained in the `DBContext` base class constructor. Usually being passed `ConnectionStringName`, which was then used to look up the connection string in the `web.config` / `app.config`.

Now in our `Startup` class, in the `ConfigureService` method, we now inject the `DBContextOptionsBuilder` directly into our `DBContext` with the ConnectionString information attached. Most of our modeling code remained the same. However, there were some changes to method names such as `WithRequired` is now `WithOne`. Additionally, the DB Context does not provide a `Find()` method, which we use pretty frequently. Luckily, there is some ` d` has put together a pretty decent extension method and suggested to the EF team. We'll keep an eye out on this one.

This is all based on our rather small codebase rather straight-forward models.

## Just for kicks  ##

After we had our application running on the new stack, we thought it would be an interesting exercise to build our application on an Ubuntu 15 machine. We installed DNVM on Ubuntu following the (github docs)[
https://github.com/dotnet/coreclr/blob/master/Documentation/install/get-dotnetcore-dnx-linux.md]. After running the quick sample code successfully we ran a build of our source. Things worked rather flawlessly.

We then installed Kestrel via (docs.asp.net)[https://docs.asp.net/en/latest/getting-started/installing-on-linux.html]. Ran `dnu web` and things just worked.

## In Conclusion ##

Our gripes really exist in that the documentation is pretty much all over the place. Things have changes so drastically through the beta, rc, rtm builds is very difficult to keep what's outdated and what's current sorted out. There are some interesting stumblings we've run acrossed as well. If you look at the most recent (dotnet.github.io)[http://dotnet.github.io/getting-started/] getting started page. It shows examples that are similar to those we've seen with `dnu` and `dnx` but falling under a single `dotnet` executable. Another thing is getting all the naming / versioning sorted out. This is INSANELY difficult to keep track of. .NET, .NET Core, CLR, Core Clr, 4.5.2, 5.0, 1.0...zomg!

Aside from the obligatory gripes,  we are very pleased with the cross platform story and moving to some deeper testing. So far so good. :)
