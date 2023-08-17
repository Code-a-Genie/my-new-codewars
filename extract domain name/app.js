// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = "cnet"











function domainName(url) {
    let domain = url;
  
    // Remove protocol (http://, https://)
    domain = domain.replace(/(https?:\/\/)?(www\.)?/, '');
  
    // Remove path and query string
    domain = domain.split('/')[0];
  
    // Remove TLD (top-level domain) if present
    domain = domain.split('.')[0];
  
    return domain;
  }
  