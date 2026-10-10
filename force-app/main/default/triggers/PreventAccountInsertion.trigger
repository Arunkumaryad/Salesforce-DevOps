trigger PreventAccountInsertion on Account (before insert) {
    if(Trigger.isBefore && Trigger.isInsert) {
        for(Account acc : Trigger.New) {
            if(acc.AnnualRevenue < 10000) {
                acc.addError('You can not insert this account.');
            }
        }
    }
}