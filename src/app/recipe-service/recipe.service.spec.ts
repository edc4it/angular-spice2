import {RecipeService} from "./recipe.service";
import {defer} from "rxjs"
import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";

describe('RecipeService with spy', () => {
  let service: RecipeService;
  let httpClientSpy;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RecipeService(httpClientSpy);
  });

  it('should return a recipe', () => {
    const data = {
      'id': '123',
      'title': 'Carrot and Chickpea Salad'
    };

    httpClientSpy.get.and.returnValue(defer(() => Promise.resolve(data)));

    service.get('123').subscribe(d => expect(d.title).toBe("Carrot and Chickpea Salad"), fail)


  })

});

describe("RecipeService with TestBed", () => {

  let httpTestingController: HttpTestingController;
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [RecipeService]
      }
    );
    service = TestBed.get(RecipeService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("should return a recipes ordered", () => {

    const data = [
      {
        "id": "124",
        "title": "Apple Pies"
      },
      {
        "id": "123",
        "title": "Carrot and Chickpea Salad"
      }
    ];

    service.getAll("").subscribe(d => {
      expect(d[0].title).toBe("Apple Pies")
    }, fail);

    const req = httpTestingController.expectOne(req => req.url === 'http://localhost:5000/api/recipes');
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.has("sort")).toBeTruthy();
    req.flush(data);


  });


  afterEach(() => {
    httpTestingController.verify();
  });
});
