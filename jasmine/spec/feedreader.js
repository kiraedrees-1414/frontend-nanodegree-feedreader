
$(function() { 
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
    

    it(' url defined ' , function(){
        for( let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.constructor).toBe(String);
            expect(feed.url.length).not.toBe(0);
        }
    
    });
    
    it('each has name ' , function(){
        for (let feed of allFeeds){
            expect(feed.name).toBeDefined();
            expect(feed.name.constructor).toBe(String);
            expect(feed.name.length).not.toBe(0);

        }
    });
});

describe('The menu',function(){
    it('hidden by defult',function(){
        let hidden1 = document.body.classList.contains('menu-hidden');
        expect(hidden1).toBe(true);
    });
    
    it('toggles ',function(){
        let micon = document.querySelector('a.menu-icon-link');
        micon.click();
        expect(document.body.classList.contains('menu-hidden')).toBe(false);
        micon.click();
        expect(document.body.classList.contains('menu-hidden')).toBe(true);
    });
});


describe('Initial Entries',function(){


beforeEach(function(done){
    loadFeed(0, function(){
done();
    });
});

it('feed container',function(){
    expect($('.feed .entry').length).toBeGreaterThan(0);
});
});

describe('New Feed Selection',function(){
    let feed1 ,feed2;

    beforeEach(function(done){
        loadFeed(3, function(){
            feed1 = document.querySelector('div.feed').innerHTML;
        loadFeed(2, function(){
                feed2 = document.querySelector('div.feed').innerHTML;
                done();
        });
    }) ;
});
it('the new feed lods',function(){
    expect(feed1).not.toBe(feed2);
});
});
    }());
