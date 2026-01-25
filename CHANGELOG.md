# Enron Website Changelog

## Version 2.7.1
**Released on December 27th, 2025.**

### Added
- **Content Disclaimer**: Added a small legal disclaimer at the bottom of every page.

### Changed
- **Not Avaliable Page**: Moved to .org domain.
---

## Version 2.7
**Released on December 27th, 2025.**

### Added
- **Ask Why Commercials**: Added .mov version of Bandwidth ad and .asf version of the 30-second Weather ad (taken from a low-quality VHS rip, not the original file, but better than nothing).

### Changed
- **Ask Why Commercials**: Updated files so they all conform to the original files, even if they are not.
---

## Version 2.6.1
**Released on December 27th, 2025.**

### Changed
- **Enron Transportation Services**: Updated content.
---

## Version 2.6
**Released on December 27th, 2025.**

### Added
- **Pressroom: Press Releases**: Added missing press releases pages and files.

### Changed
- **Changelog**: Switched from a html page to an .md file for GitHub compatibility. Removed /changelog/ directory.
- **Source Content**: Reorganized /img/ into a single directory for all images, regardless of their type, only left pages that use different source content like the values and the annual reports. Renamed /doc/pressroom/ to /docs/pr/ and moved /vid/corp to /vid/.
- **Not Avaliable Page**: Switched to redirecting to that page on the Enron Archive website, to distinguish it from the project.

### Deleted
- Deleted /project/ directory, all pages moved elsewhere.

---

## Version 2.5.5
**Released on June 20th, 2023.**

### Added
- **[Pressroom: 2001 Press Releases](/corp/pressroom/releases/2001/press_chron2001.html)**: Added all releases until August 13th. PRs after that are outside of the scope of this project.

### Comments
- With this release the entire /corp/ site is more or less content complete. Now I can focus on building the EBS and other subs webpages.

---

## Version 2.5.4
**Released on May 06th, 2023.**

### Added
- **[Pressroom: 2000 Press Releases](/corp/pressroom/releases/2000/press_chron2000.html)**: Added all releases.

### Changed
- https://broadband.enroncorp.com/ now redirects to the WIP EBS page so at least you can see the landing page. Inside links won't work as they point to the https://broadband.enroncorp.com/ folder, but the home should work just fine at least as a placeholder.
- More changes to the /src/ to make it easier for me to code stuff.

### Fixed
- /corp/pressroom: Fixed wrong link for the boilerplate of the releases from 99 'til 2000.

---

## Version 2.5.3
**Released on April 9th, 2023.**

### Added
- **[Pressroom: 1999 Press Releases](/corp/pressroom/releases/1999/press_chron1999.html)**: Added all releases from 1999.
- **[Investor Relations: Conference Call Registration](/corp/investors/callsreg.html)**: Added registration form.
- **[Press Room: Releases](/corp/pressroom/releases/)**: Added individual company releases pages from 1996 to 1999.

---

## Version 2.5.2
**Released on April 8th, 2023.**

### Added
- **[Pressroom: 1999 Press Releases](/corp/pressroom/releases/1999/press_chron1999.html)**: Added releases until August. The page will remain hidden until the year is complete but you can access it in the meantime.

### Changed
- Changes to the /src/ folder structure to make it easier to code.

---

## Version 2.5.1
**Released on October 01, 2022.**

### Added
- **[Pressroom: 1999 Press Releases](/corp/pressroom/releases/1999/press_chron1999.html)**: Added releases until August. The page will remain hidden until the year is complete but you can access it in the meantime.

---

## Version 2.5
**Released on January 13, 2022.**

### Added
- The project is now available on GitHub! Check it out at [https://github.com/facundopignanelli/enroncorp](https://github.com/facundopignanelli/enroncorp).
- **[California: Steven Kean's Testimony](/corp/pressroom/california/kean.html)**: Who the f*ck uploads a word document as an HTML file? Apparently Enron did.
- **[Pressroom: 1999 Press Releases](/corp/pressroom/releases/1999/press_chron1999.html)**: Added releases until July. The page will remain hidden until the year is complete but you can access it in the meantime.
- **[SEC Fillings](/corp/investors/sec/)**: Added SEC fillings from 2001 (prior years aren't available).

### Changed
- The website has a new (and final!) domain: [enroncorp.com](http://enroncorp.com)
- The whole /src/ directory has been reorganized to be faster to type and also more akin to the structure of the website itself.
- Email addresses updated with the new domain (so I can actually receive emails from them).

### Fixed
- /corp/pressroom: Updated link for Kean's testimony.
- /corp/investors/: Fixed link for SEC fillings.

---

## Version 2.4.2
**Released on January 06, 2022.**

### Changed
- The whole website has a new domain: https://enroncorp.netlify.app/
- /not/: Moved to https://enronarchive.org/not//
- /changelog/: Moved to /project/changelog/
- /azurix/: Moved to /project/wip/azurix/ since it is not finished.
- https://broadband.enroncorp.com/: Moved to /project/wiphttps://broadband.enroncorp.com/ since it is not finished.
- Google Analytics code removed from the whole site.

### Fixed
- /corp/: Fixed URL to map to headquarters.

---

## Version 2.4.1
**Released on May 24, 2021.**

### Fixed
- https://wholesale.enroncorp.com/petro/trading.html: Fixed image location.

---

## Version 2.4.0
**Released on May 05, 2021.**

### Changed
- The whole website has a new domain: http://enron.facundopignanelli.com

---

## Version 2.3.2
**Released on January 28, 2020.**

### Changed
- The 'resources' directory has been renamed to 'src'.
- Images for FGT were moved from '/src/imghttps://transportation.enroncorp.com/' to '/src/imghttps://transportation.enroncorp.com/fgt/'.
- Enron Credit (Global): Updated topbar with smoother and crisper text.
- Changelog: Some cosmetic updates.
- The whole website has a new domain: http://enroncorp.16mb.com.

### Fixed
- /corp/investors/stock/charts.html: Fixed navimage.
- /corp/investors/annuals/annual98/review.html: Link to get Acrobat didn't point to the correct URL.
- /corp/investors/annuals/annual98/shareholder.html: Several links were not pointing to the correct URL.
- /corp/investors/annuals/2000/information.html: A link was not pointing to the correct URL.
- /corp/workatenron/aa/analyst.html: Fixed topbar missing.

### Notes
This was supposed to be released on 2019 with a lot more content, but I honestly didn't have the time to work on this, as I'm also working on other projects so I decided to release this in the meantime. The next big thing coming is EBS, but I don't know when. I'm sorry.

The Social accounts will be announced from now on just to make announcements of new website content (in the form of Enron advertising its services), I don't have the time anymore to make the account post things every day, and tbh it was getting really repetitive.

---

## Version 2.3.1
**Released on October 20, 2019.**

### Changed
- **[Vision and Values](/corp/values/index.html)**: The page was moved from '/values/' to '/corp/values/'.

---

## Version 2.3
**Released on October 07, 2019.**

### Changed
- **[Investor Relations](/corp/investors/)**: The whole page has been made from scratch. It includes content that wasn't there before.

---

## Version 2.2.1
**Released on October 6, 2019.**

### Changed
- **Investor Relations - Map to headquarters:** The map has been updated with directions to the Enron Building before bankruptcy.

### Fixed
- **Enron Energy Services**: The link for 'Small Customers' was wrong.

---

## Version 2.2
**Released on September 23, 2019.**

### Added
- [Enron Credit:](https://credit.enroncorp.com) Featuring a reconstructed topbar, made from scratch.
- [EnronOnline:](/eol/) But not really, it's just a placeholder while I try to figure out what can be done to bring back EOL to life...
- [Enron Direct:](https:/https://direct.enroncorp.com/.enroncorp.com/) Introducing Enron Direct! But only if you are from [Canada](https:/https://direct.enroncorp.com/.enroncorp.com/ca/) or [Spain](https:/https://direct.enroncorp.com/.enroncorp.com/es/).

### Changed
- **Not Available Page:** The page was moved from /eol/ to a more logical place: /not/index.html. Also, all references to this page have been updated.
- **Global:** All references to EnronOnline that pointed to a picture have been updated to point to the new EOL page.
- **Changelog:** Some cosmetic updates.

### Fixed
- Changelog: Some some duplicated separator lines.

### Notes
Google Analytics is being deprecated across the whole website. New pages don't feature the GA code, and I'll remove the code from existing page sometime in the future.

---

## Version 2.1.1
**Released on September 08, 2019.**

### Changed
- **Changelog:** New pages now contain a link to them and there's a new 'Changed' section that will feature changes made to existing pages.
- **Wind:** Updated information and a new 'Who We Are' page.

### Fixed
- '404': Homepage link was wrong.
- Gifts and Grants - Matching: Broken image removed.
- M150: Broken image removed.

### Notes
Some pages will have to be re-done in order to be consistent with the Press Releases, I'm aware of that and I'm working on it.

---

## Version 2.1
**Released on September 03, 2019.**

### Added
- [Enron - Vision and Values.](/values/)

### Fixed
- EWS: Some links were wrong.
- Fertilizers: Bottombar in 'Consumers' was missing.
- Fertilizers: 'Caps' menu link in 'Producers' was wrong.
- Petrochemicals & Plastics: 'Price' CSS was wrong.
- Global: Some links to Enron Credit were wrong.
- Changelog: Strip link was wrong.

---

## Version 2.0
**Released on September 1st, 2019.**

### Added
- **Changelog Page:** To keep track of what's being released or fixed, it's the page you are seeing now.
- [Frank Gehry, Architect](/corp/gehry/)

### Notes
Press Releases for 1999 onwards are being done, but in the meantime I have disabled them from the 'Press Room' page.

---
