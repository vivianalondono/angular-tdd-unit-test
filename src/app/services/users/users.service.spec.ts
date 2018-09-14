import { TestBed, inject, fakeAsync, tick } from "@angular/core/testing";
import { UsersService } from "./users.service";
import { MockBackend } from "@angular/http/testing";
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse
} from "@angular/common/http";

// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Observable, of } from "rxjs";

describe("UsersService", () => {
  let userService: UsersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [UsersService]
    });
    // Inject the http service and test controller for each test
    userService = TestBed.get(UsersService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("should be created", inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  describe("Pruebas para obtener usuario", () => {

    it("Debería retornar los datos del usuario con un id", () => {
      let dataResponse;
      let userMock = {
        data: {
          id: 2,
          first_name: "Janet",
          last_name: "Weaver",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        }
      };

      //Act
      userService.getUser(2).subscribe(response => {
        dataResponse = response;
        // When observable resolves, result should match test data
        expect(dataResponse).toEqual(userMock);
      });

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const req = httpTestingController.expectOne(
        "https://reqres.in/api/users/2"
      );

      // Assert that the request is a GET.
      expect(req.request.method).toEqual("GET");

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req.flush(userMock);

      // Finally, assert that there are no outstanding requests.
      httpTestingController.verify();
    });

    it("Debería retornar error 404", () => {
      const emsg = "simulated network error";
      let url = "https://reqres.in/api/users/23";

      userService.getUser(23).subscribe(
        data => fail("should have failed with the network error"),
        (error: HttpErrorResponse) => {
          expect(error.error.message).toEqual(emsg, "message");
        }
      );

      const req = httpTestingController.expectOne(url);

      // Create mock ErrorEvent, raised when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc
      const mockError = new ErrorEvent("Network error", {
        message: emsg
      });

      // Respond with mock error
      req.error(mockError);
    });

  });

  describe("Pruebas para crear usuario", () => {

    it("Debería crear un nuevo usuario", () => {
      let url = "https://reqres.in/api/users";
      let dataResponse;
      let userMock = {
        name: "morpheus",
        job: "leader",
        id: "645",
        createdAt: "2018-09-14T04:14:20.362Z"
      };

      let bodyRequest = {
        name: "morpheus",
        job: "leader"
      };

      //Act
      userService.createUser(bodyRequest).subscribe(response => {
        dataResponse = response;
        expect(dataResponse).toEqual(userMock);
      });

      const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual("POST");

      req.flush(userMock);

      httpTestingController.verify();
    });

    it("Debería retornar error 404", () => {
      const emsg = "simulated network error";
      let url = "https://reqres.in/api/users";
      let userMock = {
        name: "morpheus",
        job: "leader",
        id: "645",
        createdAt: "2018-09-14T04:14:20.362Z"
      };

      userService.createUser(userMock).subscribe(
        data => fail("should have failed with the network error"),
        (error: HttpErrorResponse) => {
          expect(error.error.message).toEqual(emsg, "message");
        }
      );

      const req = httpTestingController.expectOne(url);

      const mockError = new ErrorEvent("Network error", {
        message: emsg
      });

      req.error(mockError);
    });

  });


  describe("Pruebas para actualizar usuario", () => {

    it("Debería actualizar usuario", () => {
      let url = "https://reqres.in/api/users/2";
      let dataResponse;
      let userMock = {
        "name": "morpheus",
        "job": "zion resident",
        "updatedAt": "2018-09-14T04:41:35.250Z"
      };

      let bodyRequest = {
        "name": "morpheus",
        "job": "zion resident"
      };
      let userId = 2;

      //Act
      userService.updateUser(userId, bodyRequest).subscribe(response => {
        dataResponse = response;
        expect(dataResponse).toEqual(userMock);
      });

      const req = httpTestingController.expectOne(url);

      expect(req.request.method).toEqual("PUT");

      req.flush(userMock);

      httpTestingController.verify();
    });

    it("Debería retornar error 404", () => {
      const emsg = "simulated network error";
      let url = "https://reqres.in/api/users/2";
      let userMock = {
        "name": "morpheus",
        "job": "zion resident",
        "updatedAt": "2018-09-14T04:41:35.250Z"
      };

      let bodyRequest = {
        "name": "morpheus",
        "job": "zion resident"
      };
      let userId = 2;

      //Act
      userService.updateUser(userId, bodyRequest).subscribe(
        data => fail("should have failed with the network error"),
        (error: HttpErrorResponse) => {
          expect(error.error.message).toEqual(emsg, "message");
        }
      );

      const req = httpTestingController.expectOne(url);

      const mockError = new ErrorEvent("Network error", {
        message: emsg
      });

      req.error(mockError);
    });

  });
});
