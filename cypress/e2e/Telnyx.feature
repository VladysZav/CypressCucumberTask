Feature: Telnyx tests
    Scenario: First open 
        Given Open Telnyx page

    Scenario: Testing the "JOIN THE WAITLIST" button
        When Click header button "JOIN THE WAITLIST."
        Then Check what went to "https://telnyx.com/products/storage" and go back

    Scenario: Testing the "Read customer story" button
        When Click main button "Read customer story →"
        Then Check what went to "https://telnyx.com/customer-stories" and go back

    Scenario: Testing the "Messaging API" button in Powerful products box
        When Click main button "Messaging API" in Powerful products box
        Then Check what went to "https://telnyx.com/products/sms-api" and go back
    
    Scenario: Testing the "Video API" button in Powerful products box
        When Click main button "Video API" in Powerful products box
        Then Check what went to "https://telnyx.com/products/video-api" and go back

    Scenario: Testing the "Wireless" button in Powerful products box
        When Click main button "Wireless" in Powerful products box
        Then Check what went to "https://telnyx.com/products/iot-sim-card" and go back

    Scenario: Testing the "Voice API" button in Powerful products box
        When Click main button "Voice API" in Powerful products box
        Then Check what went to "https://telnyx.com/products/voice-api" and go back  

    Scenario: Testing the "Elastic SIP Trunking" button in Powerful products box
        When Click main button "Elastic SIP Trunking" in Powerful products box
        Then Check what went to "https://telnyx.com/products/sip-trunks" and go back 

    Scenario: Testing the "Storage" button in Powerful products box
        When Click main button "Storage" in Powerful products box
        Then Check what went to "https://telnyx.com/products/storage" and go back

    Scenario: Testing the "Explore our products" button 
        When Click main button "Explore our products"
        Then Check what went to "https://telnyx.com/products" and go back

    Scenario: Testing the "Data & Privacy" button in footer
        When Click footer button "Data & Privacy"
        Then Check what went to "https://telnyx.com/company/data-privacy" and go back
    
    Scenario: Testing the "Blog" button in footer
        When Click footer button "Blog"
        Then Check what went to "https://telnyx.com/resources" and go back

    Scenario: Testing the "Resource Hub" button in footer
        When Click footer button "Resource Hub"
        Then Check what went to "https://telnyx.com/learn" and go back

    Scenario: Testing the "Release Notes" button in footer
        When Click footer button "Release Notes"
        Then Check what went to "https://telnyx.com/release-notes" and go back

    Scenario: Testing the "Elastic SIP Trunking" button in footer
        When Click footer button "Elastic SIP Trunking"
        Then Check what went to "https://telnyx.com/products/sip-trunks" and go back
    
    Scenario: Testing the "Call Control - Voice API" button in footer
        When Click footer button "Call Control - Voice API"
        Then Check what went to "https://telnyx.com/products/voice-api" and go back


