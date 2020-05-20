const inputName = ['name', 'description', 'password']
const addRoom = ['Room 1', 'abc', '123']
const notification = '.innos-ui-notification-notice-content'
let i = -1,j = -1

describe('Test page Classes', () => {
    beforeEach(() => {
        cy.login();
        cy.contains('Classes')
          .should('be.visible')
          .click()
        cy.wait(3000)
    })
    it('Kiểm tra url', () => {
      cy.url().should('include', 'https://class.hopez.io/hrm/classes')
    })
    it('Chọn checkbox xem thông tin', () => {
      cy.get('.ag-pinned-left-cols-container')
        .find('[role="row"] [role="gridcell"]').eq(0)
        .click()
        .should('be.visible')
    })
})
describe('Test page Rooms', () => {
    beforeEach(() => {
        cy.login();
        cy.contains('Rooms')
          .should('be.visible')
          .click()
        cy.wait(3000)
    })
    it('Kiểm tra url', () => {
      cy.url().should('include', 'https://class.hopez.io/hrm/meetingRooms')
    })
    describe('Tạo phòng học', () => {
      beforeEach(() => {
        cy.get('.innos-grid-right-header [aria-label="Add"]')
          .click()
        cy.wait(1000)
      })
      it('Thành công', () => {

        inputName.forEach(input => {
          cy.get(`#${input}.innos-ui-input`)
            .clear()
            .type(addRoom[i=i+1])
          })
        cy.get('.innos-ui-button.innos-ui-toolbar-item.ok-btn.innos-ui-button-fill')
          .click()
        cy.wait(2000)
        
        cy.get(notification)
          .should('contain', 'Success')
      })
      it('Trùng tên phòng', () => {

        inputName.forEach(input => {
          cy.get(`#${input}.innos-ui-input`)
            .clear()
            .type(addRoom[j=j+1])
          })
        cy.get('.innos-ui-button.innos-ui-toolbar-item.ok-btn.innos-ui-button-fill')
          .click()
        cy.wait(2000)
        cy.get(notification)
          .should('contain', 'Faile')
      })
      it('Hủy thao tác', () => {
        let j = -1
        inputName.forEach(input => {
          cy.get(`#${input}.innos-ui-input`)
            .clear()
            .type(addRoom[j=j+1])
        })
        cy.get('.innos-ui-button.innos-ui-toolbar-item.cancel-btn.innos-ui-button-no-fill')
          .click()
          inputName.forEach(input => {
            cy.get(`#${input}.innos-ui-input`)
              .should('have.value', '')
          })
      })
    })
    describe('Chọn group', () => {
      beforeEach(() => {
        cy.get('.ag-pinned-left-cols-container')
          .find('[role="row"] [role="gridcell"]').last()
          .click()
          .should('be.visible')
        cy.wait(1000)
        cy.get('#groups-link')
          .click()
          .should('be.visible')
        cy.wait(2000)
      })
      it('Thêm lớp vào group', () => {
        cy.get('[aria-label="Add new member"]')
          .click()
          .should('be.visible')
        cy.wait(2000)
        
        cy.get('.innos-ui-flexible-column-layout-column-end .ag-pinned-left-cols-container')
          .find('[role="row"] [role="gridcell"]')
          .within(($check) => {
              cy.get($check).first().click()
              cy.get($check).last().click() 
          })
        cy.get('.innos-ui-footer > .ok-btn').last()
          .click()
        cy.wait(2000)
        cy.get('.innos-ui-notification-notice-content')
          .should('contain', 'Success')
      })
      it('Hủy thao tác', () => {
        cy.get('[aria-label="Add new member"]')
          .click()
          .should('be.visible')
        cy.wait(2000)
        
        cy.get('.innos-ui-flexible-column-layout-column-end .ag-pinned-left-cols-container')
          .find('[role="row"] [role="gridcell"]')
          .within(($check) => {
              cy.get($check).first().click()
              cy.get($check).last().click() 
          })
        cy.get('.innos-ui-footer > .cancel-btn').last()
          .click()
        
        cy.get('.innos-ui-flexible-column-layout-column-end .ag-row-selected ')
          .should('not.exist')
      })
    })
})
