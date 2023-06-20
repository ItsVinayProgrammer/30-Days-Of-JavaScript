//Day 20_Design_Patterns

// Subject
class NewsPublisher {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(observer) {
      this.subscribers.push(observer);
    }
  
    unsubscribe(observer) {
      const index = this.subscribers.indexOf(observer);
      if (index !== -1) {
        this.subscribers.splice(index, 1);
      }
    }
  
    publishNews(news) {
      console.log(`Publishing news: ${news}`);
      this.subscribers.forEach(observer => observer.update(news));
    }
  }
  
  // Observers
  class NewsSubscriber {
    constructor(name) {
      this.name = name;
    }
  
    update(news) {
      console.log(`${this.name} received news: ${news}`);
    }
  }
  
  // Usage
  const publisher = new NewsPublisher();
  
  const subscriber1 = new NewsSubscriber('Subscriber 1');
  const subscriber2 = new NewsSubscriber('Subscriber 2');
  const subscriber3 = new NewsSubscriber('Subscriber 3');
  
  publisher.subscribe(subscriber1);
  publisher.subscribe(subscriber2);
  publisher.subscribe(subscriber3);
  
  publisher.publishNews('Breaking news: COVID-19 cases decline globally.');
  
  publisher.unsubscribe(subscriber2);
  
  publisher.publishNews('Sports: Local team wins the championship.');
  
  publisher.unsubscribe(subscriber1);
  publisher.unsubscribe(subscriber3);
  
  publisher.publishNews('Technology: New smartphone releases.');
  
  